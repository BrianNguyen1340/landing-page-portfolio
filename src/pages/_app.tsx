'use client'

import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import '~/styles/globals.css'
import { WordPreLoader } from '~/components/ui/Preloader/WordPreLoader'
import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'

export default function App({ Component, pageProps, router }: AppProps) {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		;(async () => {
			document.body.style.cursor = 'wait'

			setTimeout(() => {
				setIsLoading(false)
				document.body.style.cursor = 'default'
				window.scrollTo(0, 0)
			}, 1000)
		})()
	}, [])

	return (
		<>
			<AnimatePresence mode='wait'>
				{isLoading && (
					<WordPreLoader className={`${isLoading ? 'z-50' : 'z-0'}`} />
				)}
			</AnimatePresence>
			<Header />
			<AnimatePresence mode='wait'>
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			<Footer />
		</>
	)
}
