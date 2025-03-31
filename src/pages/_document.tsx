import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html
			lang='en'
			className='select-none bg-white font-winky-sans text-base text-[--color-dark] scrollbar-hide'
			suppressHydrationWarning
		>
			<Head>
				<link rel='icon' href='/svg/favicon.svg' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
