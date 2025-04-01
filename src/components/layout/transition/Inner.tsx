import { FC, ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

import { opacity, perspective, slide } from '~/anims/inner'

interface InnerProps {
	children: ReactNode
}

export const Inner: FC<InnerProps> = ({ children }) => {
	const anim = (variants: Variants) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			variants,
		}
	}

	return (
		<div className='bg-black'>
			<motion.div
				{...anim(slide)}
				className='fixed left-0 top-0 z-50 h-screen w-screen bg-white'
			/>
			<motion.div {...anim(perspective)} className='bg-white'>
				<motion.div {...anim(opacity)} className='min-h-screen p-10'>
					{children}
				</motion.div>
			</motion.div>
		</div>
	)
}
