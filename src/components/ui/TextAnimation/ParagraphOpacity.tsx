'use client'

import { FC, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParagraphOpacityProps {
	paragraph: string
	className?: string
}

const ParagraphOpacity: FC<ParagraphOpacityProps> = ({
	paragraph,
	className,
}) => {
	const container = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.9', 'start 0.25'],
	})

	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

	return (
		<motion.p
			ref={container}
			style={{ opacity }}
			className={`${className} flex flex-wrap`}
		>
			{paragraph}
		</motion.p>
	)
}

export default ParagraphOpacity
