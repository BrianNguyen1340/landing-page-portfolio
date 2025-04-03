import type { Config } from 'tailwindcss'
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'
import tailwindAnimated from 'tailwindcss-animated'
import tailwindMotion from 'tailwindcss-motion'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			'winky-sans': ['Winky Sans', 'sans-serif'],
		},
		screens: {
			xxs: '320px',
			xs: '480px',
			sm: '640px',
			md: '800px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			keyframes: {
				shine: {
					'0%': { backgroundPosition: '100%' },
					'100%': { backgroundPosition: '-100%' },
				},
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			animation: {
				shine: 'shine 5s linear infinite',
				gradient: 'gradient 8s linear infinite',
			},
		},
	},
	plugins: [tailwindScrollbarHide, tailwindAnimated, tailwindMotion],
}
export default config
