import { motion } from 'framer-motion'

export const JobTitle = () => {
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
			className='absolute left-[70%] top-[20%] z-10 hidden text-[36px] lg:block'
		>
			<svg
				width='9'
				height='9'
				viewBox='0 0 9 9'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='mb-[100px] scale-[2]'
			>
				<path
					d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
					fill='black'
				/>
			</svg>
			<p className='mb-5'>Designer</p>
			<p>& Freelancer</p>
		</motion.div>
	)
}
