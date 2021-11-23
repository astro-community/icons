declare module '*.astro' {
	const value: {
		(props: {
			'fill-rule'?: string
			'fill'?: string
			'height'?: number | string
			'size'?: number | string
			'title'?: string
			'viewBox'?: string
			'width'?: number | string
		}): any
	}

	export default value
}