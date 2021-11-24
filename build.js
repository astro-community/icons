import { optimize as optimizeSVGNative } from 'svgo'
import Zip from 'adm-zip'
import fetch from 'node-fetch'
import fs from 'fs/promises'
import ps from 'path/posix'

/** Location of the Radix Icons zip containing the original SVG files. */
const zipHREF = 'https://github.com/radix-ui/icons/archive/refs/heads/master.zip'

/** License of the Radix-UI Icons project. */
const licenseText = `/*! radix-icons | MIT License | https://icons.modulz.app/ */`

const toAstroComponent = (innerSVG, title) => `---
${licenseText}

export { Props } from './Props.ts';

let {
	size,
	title,
	width = size,
	height = size,
	...props
} = {
	'fill': 'CurrentColor',
	'fill-rule': 'evenodd',
	'title': '${title}',
	'viewBox': '0 0 15 15',
	...Astro.props
}

const toAttributeSize = (size: number) => String(size).replace(/(?<=[0-9])x$/, 'em')

size = toAttributeSize(size)
width = toAttributeSize(width)
height = toAttributeSize(height)
---
<svg {width} {height} {...props}>{title ? (<title>{title}</title>) : ''}${innerSVG}</svg>`

const toHydratedReadme = (content, icons) => content.replace(
	/(<!-- ICON_STATS: -->)[\W\w]*(<!-- :ICON_STATS -->)/,
	(_0, $1, $2) => `${
		$1
	}\n\n${
		`There are ${icons.length} icons included in this package.`
	}\n\n${
		`| Icon | Import | Preview |`
	}\n${
		`|:---- |:------ |:-------:|`
	}\n${
		icons.map(
			icon => `| ${
				`**${icon.title}**`
			} | ${
				`\`@astropub/icons/${icon.baseName}\``
			} | ${
				`![${icon.title}](https://raw.githack.com/radix-ui/icons/master/packages/radix-icons/icons/${icon.name}.svg)`
			} |`
		).join('\n')
	}\n\n${
		$2
	}`
)

const toInnerSvg = (input) => optimizeSVGNative(input, {
	plugins: [
		'removeDoctype',
		'removeXMLProcInst',
		'removeComments',
		'removeMetadata',
		'removeXMLNS',
		'removeEditorsNSData',
		'cleanupAttrs',
		'minifyStyles',
		'convertStyleToAttrs',
		'cleanupIDs',
		'removeRasterImages',
		'removeUselessDefs',
		'cleanupNumericValues',
		'cleanupListOfValues',
		'convertColors',
		'removeUnknownsAndDefaults',
		'removeNonInheritableGroupAttrs',
		'removeUselessStrokeAndFill',
		'removeViewBox',
		'cleanupEnableBackground',
		'removeHiddenElems',
		'removeEmptyText',
		'convertShapeToPath',
		'moveElemsAttrsToGroup',
		'moveGroupAttrsToElems',
		'collapseGroups',
		'convertPathData',
		'convertTransform',
		'removeEmptyAttrs',
		'removeEmptyContainers',
		'mergePaths',
		'removeUnusedNS',
		'sortAttrs',
		'removeTitle',
		'removeDesc',
		'removeDimensions',
		'removeStyleElement',
		'removeScriptElement',
	],
}).data.replace(/^<svg[^>]*>|<\/svg>$/g, '').replace(/ fill="currentColor"/g, '').replace(/ (clip|fill)-rule="evenodd"/g, '').replace(/\/>/g, ' />')

// import Radix Icons

/** Imported Feather Icons zip. */
const zip = new Zip(
	Buffer.from(
		await (
			await fetch(zipHREF)
		).arrayBuffer()
	)
)

/** Current directory. */
const currentDir = ps.resolve('.')

/** Distribution directory. */
const distDir = ps.resolve(currentDir, 'dist')

/** Content of the main entry `index.ts` file */
let contentOfIndexJS = `${licenseText}\n`

/** Data related to each icon exported by this package. */
const icons = []

// clean the distribution directory
await fs.rm(distDir, { force: true, recursive: true })
await fs.mkdir(distDir, { recursive: true })

// copy the attribute typings file
await fs.copyFile(ps.resolve(currentDir, 'Props.ts'), ps.resolve(distDir, 'Props.ts'))

// copy the SVGs from the ZIP into the dist directory
for (const entry of zip.getEntries()) {
	if (entry.entryName.startsWith('icons-master/packages/radix-icons/icons/') && entry.entryName.endsWith('.svg')) {
		zip.extractEntryTo(entry, distDir, false, true)
	}
}

// convert the SVG files into Astro components
for (let filepath of await fs.readdir(distDir, { encoding: 'utf8' })) {
	// ignore non-svg files
	if (!filepath.endsWith('.svg')) continue

	/** Base name of the SVG. */
	const name = filepath.replace(/\.svg$/, '')

	// get filepath as a full path
	filepath = ps.resolve(distDir, filepath)

	/** Inner contents of the SVG file. */
	const innerSVG = toInnerSvg(await fs.readFile(filepath, 'utf8'))

	// remove the original SVG file
	await fs.rm(filepath, { force: true, recursive: true })

	/** Formatted title. */
	const title = name.replace(
		// uppercase alphabetic characters after the start or a dash
		/(?<=^|-)([a-z])/g,
		(_0, $1) => $1.toUpperCase()
	).replace(
		// replace non-alphanumeric characters with space
		/[^A-Za-z0-9]+/g,
		' '
	).replace(
		// respect 'CodeSandbox' brand casing
		'Codesandbox Logo',
		'CodeSandbox Logo'
	).replace(
		// respect 'GitHub' brand casing
		'Github Logo',
		'GitHub Logo'
	).replace(
		// respect 'IconJar' brand casing
		'Iconjar Logo',
		'IconJar Logo'
	)

	/** Base name, which is the formatted title without spaces (PascalCase) */
	const baseName = title.replace(/ /g, '')

	// write the astro component to a file
	await fs.writeFile(
		ps.resolve(distDir, `${baseName}.astro`),
		toAstroComponent(innerSVG, title),
		'utf8'
	)

	// add the astro component export to the main entry `index.ts` file
	contentOfIndexJS += `\nexport { default as ${baseName} } from './${baseName}.astro'`

	icons.push({ name, baseName, title })
}

// write the main entry `index.ts` file
await fs.writeFile(
	ps.resolve(distDir, 'index.ts'),
	contentOfIndexJS,
	'utf8'
)

// hydrate the `README.md` file
fs.writeFile(
	ps.resolve(currentDir, 'README.md'),
	(
		toHydratedReadme(
			await fs.readFile(ps.resolve(currentDir, 'README.md'), 'utf8'),
			icons
		)
	)
)