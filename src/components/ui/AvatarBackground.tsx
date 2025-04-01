import { motion } from 'framer-motion'

export const AvatarBackground = () => {
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
			className='relative h-screen overflow-hidden bg-[#feefd0]'
		>
			<div className='absolute left-0 top-0 z-[1] h-full w-full'>
				<img
					src='/image/avatar1.png'
					alt='avatar'
					className='absolute left-1/2 top-[10%] h-full w-auto -translate-x-1/2 object-cover align-middle'
				/>
			</div>
		</motion.div>
	)
}
