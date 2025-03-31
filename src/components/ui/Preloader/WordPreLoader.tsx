'use client'

import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { opacity, slideUp } from '~/anims/preloader'

const words = [
	{ content: 'Xin chào' },
	{ content: 'Hello' },
	{ content: 'Bonjour' },
	{ content: 'स्वागत हे' },
	{ content: 'Ciao' },
	{ content: 'Olá' },
	{ content: 'おい' },
	{ content: 'Hallå' },
	{ content: 'Guten tag' },
	{ content: 'Hallo' },
]

interface WordPreLoaderProps {
	className?: string
}

const WordPreLoader: FC<WordPreLoaderProps> = ({ className }) => {
	const [index, setIndex] = useState(0)
	const [dimension, setDimension] = useState<{ width: number; height: number }>(
		{ width: 0, height: 0 },
	)

	useEffect(() => {
		setDimension({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}, [])

	useEffect(() => {
		if (index === words.length - 1) return
		setTimeout(
			() => {
				setIndex(index + 1)
			},
			index === 0 ? 1000 : 150,
		)
	}, [index])

	const initialPath = `
		M0 0 L${dimension.width}
		0 L${dimension.width}
		${dimension.height}
		Q${dimension.width / 2}
		${dimension.height + 300}
		0 ${dimension.height}
		L0 0
	`

	const targetPath = `
		M0 0 L${dimension.width} 
		0 L${dimension.width}
		${dimension.height}
		Q${dimension.width / 2}
		${dimension.height} 0
		${dimension.height}
		L0 0
	`

	const curve = {
		initial: {
			d: initialPath,
			transition: {
				duration: 0.7,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		exit: {
			d: targetPath,
			transition: {
				duration: 0.7,
				ease: [0.76, 0, 0.24, 1],
				delay: 0.3,
			},
		},
	}

	return (
		<motion.div
			className={`${className} word-preloader fixed flex h-screen w-screen items-center justify-center bg-[#141516]`}
			variants={slideUp}
			initial='initial'
			exit='exit'
		>
			{dimension.width > 0 && (
				<>
					<motion.p
						className='absolute z-[1] flex items-center text-[56px] text-white'
						variants={opacity}
						initial='initial'
						animate='enter'
						exit='exit'
					>
						<span className='mr-3 block h-3 w-3 rounded-full bg-white'></span>
						{words[index].content}
					</motion.p>
					<svg className='absolute top-0 h-[calc(100%+300px)] w-full'>
						<motion.path
							className='fill-[#141516]'
							variants={curve}
							initial='initial'
							exit='exit'
						/>
					</svg>
				</>
			)}
		</motion.div>
	)
}

export default WordPreLoader
