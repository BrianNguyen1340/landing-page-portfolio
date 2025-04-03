import { motion } from 'framer-motion'

import { ScrollVelocity } from '~/components/ui/TextAnimation/ScrollVelocity'

export const InfiniteTextMoveOnScroll = () => {
	return (
		<motion.div
			id='infinite-text'
			className='absolute top-[calc(100vh-200px)] z-[2] h-[150px]'
		>
			<ScrollVelocity texts={['Nguyen Nhu Huynh -']} className='text-[150px]' />
		</motion.div>
	)
}
