import { motion } from 'framer-motion'

export const AvatarBackground = () => {
	return (
		<motion.div
			id='avatar-background'
			className='relative h-screen overflow-hidden'
		>
			<div className='absolute left-0 top-0 z-[1] h-full w-full'>
				<img
					src='/image/avatar1.jpg'
					alt='avatar'
					className='absolute left-1/2 top-[10%] h-full w-auto -translate-x-1/2 object-cover align-middle'
				/>
			</div>
		</motion.div>
	)
}
