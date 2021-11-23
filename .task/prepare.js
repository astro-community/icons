import { optimize as optimizeSVGNative } from 'svgo'
import Zip from 'adm-zip'
import fetch from 'node-fetch'
import fs from 'fs/promises'
import path from 'path'

const radixIconsZipURL = 'https://github.com/radix-ui/icons/archive/refs/heads/master.zip'

console.log('fetching radix-icons...')

const radixIconsZipRes = await fetch(radixIconsZipURL)
const radixIconsZipArr = await radixIconsZipRes.arrayBuffer()
const radixIconsZipBuf = Buffer.from(radixIconsZipArr)

console.log('processing radix-icons...')

const zip = new Zip(radixIconsZipBuf)

const radixIconsDest = path.posix.resolve('.', 'icons')

await fs.rm(radixIconsDest, { force: true, recursive: true })
await fs.mkdir(radixIconsDest, { recursive: true })

const isRadixSVG = (entryName) => entryName.startsWith('icons-master/packages/radix-icons/icons/') && entryName.endsWith('.svg')

for (const entry of zip.getEntries()) {
	if (isRadixSVG(entry.entryName)) {
		zip.extractEntryTo(entry, radixIconsDest, false, true);
	}
}

const optimizeSVG = (input) => optimizeSVGNative(input, {
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
}).data

const getAstroIcon = (content, title) => `---
/*! radix-icons | MIT License | https://icons.modulz.app/ */

export interface Props {
	'fill-rule'?: string
	'fill'?: string
	'height'?: number | string
	'size'?: number | string
	'title'?: string
	'viewBox'?: string
	'width'?: number | string
}

const {
	size,
	title,
	width = size,
	height = size,
	...props
} = {
	'fill': 'CurrentColor',
	'fill-rule': 'evenodd',
	'size': 15,
	'title': '${title}',
	'viewBox': '0 0 15 15',
	...Astro.props
}
---
<svg {width} {height} {...props}>{title ?
	<title>{title}</title>
: ''}
	${content.replace(
		/^<svg[^>]*>|<\/svg>$/g,
		''
	).replace(
		/ fill="currentColor"/g,
		''
	).replace(
		/ (clip|fill)-rule="evenodd"/g,
		''
	).replace(
		/\/>/g,
		' />'
	)}
</svg>`

const getAstroRoot = (imports) => `/*! radix-icons v1.0.3 | MIT License | https://icons.modulz.app/ */

export interface Props {
	'fill-rule'?: string
	'fill'?: string
	'height'?: number | string
	'size'?: number | string
	'title'?: string
	'viewBox'?: string
	'width'?: number | string
}

import Icon from './Icon.astro'

export default new Proxy(Icon, {
	get(component, name) {
		if (name in component || name === 'then') return component[name]

		return icons[name]
	},
})

${imports.map(({ name, path }) => `import { default as ${name} } from './${path}'`).join('\n')}

const icons = { ${imports.map(({ name }) => `${name}`).join(', ')} }

export { ${imports.map(({ name }) => `${name}`).join(', ')} }`

const imports = []

for (const file of await fs.readdir(radixIconsDest, { encoding: 'utf8' })) {
	if (!file.endsWith('.svg')) continue

	const filepath = path.posix.resolve(radixIconsDest, file)

	const filedata = optimizeSVG(await fs.readFile(filepath, 'utf8'))

	await fs.rm(filepath, { force: true, recursive: true })

	const title = file.replace(/\.svg$/, '').replace(/(?<=^|-)([a-z0-9])/g, ($0, $1) => $1.toUpperCase()).replace(/[^A-Za-z0-9]+/g, ' ')
	const id = title.replace(/ /g, '')

	const destdata = getAstroIcon(filedata, title)
	const destpath = path.posix.resolve(radixIconsDest, `${id}.astro`)

	await fs.writeFile(destpath, destdata)

	imports.push({ title, name: id, path: path.posix.relative('.', destpath) })
}

const maindata = getAstroRoot(imports)
const mainpath = path.posix.resolve('.', 'Icon.ts')

await fs.writeFile(mainpath, maindata)

const readme = await fs.readFile('README.md', 'utf8')

const updatedReadme = readme.replace(
	/(\<\!-- OPENING OF ICONS --\>)[\W\w]*(\<\!-- CLOSING OF ICONS --\>)/,
	($0, $1, $2) => `${$1}\n\nThere are ${imports.length} icons included in this package.\n\n${imports.map(({ name, title }) => `### ${title}\n\n\`\`\`astro
---
import * as Icon from '@astropub/icons'
---
<Icon.${name} />
\`\`\``).join('\n\n')}\n\n${$2}`
)

fs.writeFile('README.md', updatedReadme)

console.log('completed preparing radix-icons.')
