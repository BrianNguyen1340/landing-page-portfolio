'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, Variants } from 'framer-motion'

import { curve, text, translate } from '~/anims/curved'
import MainLayout from '~/components/layout/MainLayout'

interface CurvedProps {
	children: ReactNode
}

interface CurvedSvgProps {
	height: number | null
	width: number | null
}

const routes = {
	'/': 'Home',
	'/work': 'Work',
	'/about': 'About',
	'/contact': 'Contact',
}

const CurvedSvg: FC<CurvedSvgProps> = ({ height, width }) => {
	const anim = (variants: Variants) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			variants,
		}
	}

	if (width === null || height === null) {
		return null
	}

	const initialPath = `
		M0 300 
		Q${width / 2} 0 ${width} 300
		L${width} ${height + 300}
		Q${width / 2} ${height + 600} 0 ${height + 300}
		L0 0
	`

	const targetPath = `
		M0 300
		Q${width / 2} 0 ${width} 300
		L${width} ${height}
		Q${width / 2} ${height} 0 ${height}
		L0 0
	`

	return (
		<motion.svg
			{...anim(translate)}
			className='pointer-events-none fixed left-0 top-0 z-[2] h-[calc(100vh+600px)] w-screen'
		>
			<motion.path {...anim(curve(initialPath, targetPath))} />
		</motion.svg>
	)
}

const Curved: FC<CurvedProps> = ({ children }) => {
	const anim = (variants: Variants) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			variants,
		}
	}

	const router = useRouter()

	const [dimensions, setDimensions] = useState<{
		height: number | null
		width: number | null
	}>({
		height: null,
		width: null,
	})

	useEffect(() => {
		const resize = () => {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			})
		}

		resize()

		window.addEventListener('resize', resize)
		return () => {
			window.removeEventListener('resize', resize)
		}
	}, [])

	return (
		<>
			<div id='curved-container'>
				<div
					style={{ opacity: dimensions.width == null ? 1 : 0 }}
					className='pointer-events-none fixed left-0 top-0 z-[2] h-[calc(100vh+600px)] w-screen bg-black transition-[opacity_0s_linear_0.1s]'
				/>
				<motion.p
					className='absolute left-1/2 top-[40%] z-[3] -translate-x-1/2 text-center text-5xl text-white'
					{...anim(text)}
				>
					{routes[router.route as keyof typeof routes]}
				</motion.p>
				{dimensions.width != null && (
					<CurvedSvg height={dimensions.height!} width={dimensions.width!} />
				)}
			</div>
			<MainLayout>{children}</MainLayout>
		</>
	)
}

export default Curved
