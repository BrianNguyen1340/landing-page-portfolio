'use client'

import { FC, ReactNode, useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

interface WordProps {
	children: ReactNode
	progress: MotionValue<number>
	range: [number, number]
}

interface WordOpacityProps {
	paragraph: string
	className?: string
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1])
	return (
		<span className='relative mr-3'>
			<span className='absolute opacity-30'>{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	)
}

export const WordOpacity: FC<WordOpacityProps> = ({
	paragraph = '',
	className,
}) => {
	const container = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.9', 'start 0.25'],
	})

	const words = paragraph.split(' ')

	return (
		<p ref={container} className={`${className} flex flex-wrap`}>
			{words.map((word, i) => {
				const start = i / words.length
				const end = start + 1 / words.length
				return (
					<Word key={i} progress={scrollYProgress} range={[start, end]}>
						{word}
					</Word>
				)
			})}
		</p>
	)
}
