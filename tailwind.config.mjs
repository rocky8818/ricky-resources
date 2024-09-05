/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0B1623',
				secondary: '#7494c1',
			  },
			  fontFamily: {
				garet: ['Garet', 'sans-serif'],
			  },
		},
	},
	plugins: [],
}
