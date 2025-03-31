import { FC, ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

import { expand, opacity } from '~/anims/stairs'

interface StairsProps {
	children: ReactNode
}

const Stairs: FC<StairsProps> = ({ children }) => {
	const anim = (variants: Variants, custom: number | null = null) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			variants,
			custom,
		}
	}

	const columns = 5

	return (
		<div className='min-h-screen'>
			<motion.div
				{...anim(opacity)}
				className='pointer-events-none fixed left-0 top-0 z-10 h-screen w-full bg-black'
			></motion.div>
			<div className='pointer-events-none fixed left-0 top-0 z-20 flex h-screen w-screen'>
				{[...Array(columns)].map((_, index) => (
					<motion.div
						key={index}
						{...anim(expand, columns - index)}
						className='relative h-full w-full bg-black'
					/>
				))}
			</div>
			{children}
		</div>
	)
}

export default Stairs
