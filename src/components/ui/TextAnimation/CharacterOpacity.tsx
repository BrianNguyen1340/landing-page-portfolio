'use client'

import { FC, ReactNode, useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

interface WordProps {
	children: ReactNode
	range: [number, number]
	progress: MotionValue<number>
	className?: string
}

interface CharacterProps {
	children: ReactNode
	range: [number, number]
	progress: MotionValue<number>
	className?: string
}

interface CharacterOpacityProps {
	paragraph: string
	className?: string
}

const Word: FC<WordProps> = ({ children, range, progress, className }) => {
	const text = typeof children === 'string' ? children : String(children)
	const amount = range[1] - range[0]
	const step = amount / text.length

	return (
		<span className={`${className} relative mr-2`}>
			{text.split('').map((character, index) => {
				const start = range[0] + index * step
				const end = range[0] + step * (index + 1)
				return (
					<Character range={[start, end]} progress={progress} key={index}>
						{character}
					</Character>
				)
			})}
		</span>
	)
}

const Character: FC<CharacterProps> = ({
	children,
	range,
	progress,
	className,
}) => {
	const opacity = useTransform(progress, range, [0, 1])

	return (
		<span className={`${className}`}>
			<span className='absolute opacity-30'>{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	)
}

const CharacterOpacity: FC<CharacterOpacityProps> = ({
	paragraph,
	className,
}) => {
	const container = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.9', 'start 0.25'],
	})

	const words = paragraph.split(' ')

	return (
		<p
			ref={container}
			className={`${className} flex flex-wrap items-center break-words`}
		>
			{words.map((word, index) => {
				const start = index / words.length
				const end = start + 1 / words.length

				return (
					<Word key={index} range={[start, end]} progress={scrollYProgress}>
						{word}
					</Word>
				)
			})}
		</p>
	)
}

export default CharacterOpacity
