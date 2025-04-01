import { motion } from 'framer-motion'

import { ScrollVelocity } from '~/components/ui/TextAnimation/ScrollVelocity'

export const InfiniteTextMoveOnScroll = () => {
	return (
		<motion.div
			variants={{
				initial: {
					y: 300,
				},
				enter: {
					y: 0,
					transition: {
						duration: 0.6,
						ease: [0.33, 1, 0.68, 1],
						delay: 2.5,
					},
				},
			}}
			initial='initial'
			animate='enter'
			className='absolute top-[calc(100vh-200px)] z-[2] h-[150px]'
		>
			<ScrollVelocity texts={['Nguyen Nhu Huynh -']} className='text-[150px]' />
		</motion.div>
	)
}
