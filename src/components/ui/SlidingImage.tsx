import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

const slider1 = [
	{
		backgroundColor: '#e3e5e7',
		src: '/image/sixdo.jpg',
	},
	{
		backgroundColor: '#d6d7dc',
		src: '/image/sixdo.jpg',
	},
	{
		backgroundColor: '#e3e3e3',
		src: '/image/sixdo.jpg',
	},
	{
		backgroundColor: '#21242b',
		src: '/image/sixdo.jpg',
	},
]

const slider2 = [
	{
		backgroundColor: '#d4e3ec',
		src: '/image/sixdo.jpg',
	},
	{
		backgroundColor: '#e5e0e1',
		src: '/image/sixdo.jpg',
	},
	{
		backgroundColor: '#d7d4cf',
		src: '/image/sixdo.jpg',
	},
	{
		backgroundColor: '#e1dad6',
		src: '/image/sixdo.jpg',
	},
]

const SlidingImage = () => {
	const container = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
	const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

	return (
		<div
			ref={container}
			className='relative z-[1] flex flex-col gap-[3vw] bg-white sm:pt-[calc(clamp(5em,21vh,12em)*0.75)]'
		>
			<div className='relative hidden flex-col gap-[3vw] overflow-hidden bg-white sm:flex'>
				<motion.div
					style={{ x: x1 }}
					className='relative left-[-10vw] flex w-[120vw] gap-[3vw]'
				>
					{slider1.map(({ backgroundColor, src }, index) => (
						<div
							key={index}
							style={{ backgroundColor }}
							className='flex h-[20vw] w-1/4 items-center justify-center'
						>
							<div className='relative block h-[80%] w-[80%]'>
								<Image
									src={src}
									alt='image'
									fill={true}
									className='object-cover'
								/>
							</div>
						</div>
					))}
				</motion.div>
				<motion.div
					style={{ x: x2 }}
					className='relative left-[-10vw] flex w-[120vw] gap-[3vw]'
				>
					{slider2.map(({ backgroundColor, src }, index) => (
						<div
							key={index}
							style={{ backgroundColor }}
							className='flex h-[20vw] w-1/4 items-center justify-center'
						>
							<div className='relative block h-[80%] w-[80%]'>
								<Image
									src={src}
									alt='image'
									fill={true}
									className='object-cover'
								/>
							</div>
						</div>
					))}
				</motion.div>
			</div>
			<motion.div style={{ height }} className='relative bg-white sm:mt-10'>
				<div className='absolute z-[1] h-[1000%] w-full rounded-[0_0_50%_50%] bg-white' />
			</motion.div>
		</div>
	)
}

export default SlidingImage
