import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

import { RoundedButton } from '~/components/ui/RoundedButton'
import { Magnetic } from '~/components/ui/Magnetic'
import { ArrowDownLeft } from 'lucide-react'

export const Footer = () => {
	const container = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end'],
	})

	const x = useTransform(scrollYProgress, [0, 1], [0, 100])
	const y = useTransform(scrollYProgress, [0, 1], [-500, 100])

	const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

	return (
		<motion.footer
			style={{ y }}
			ref={container}
			className='relative z-[-1] flex w-full items-end overflow-hidden bg-[#141516] shadow-[0px_5px_0px_5px_#1c1d20]'
		>
			<div className='relative w-full px-[calc(clamp(2.5em,8vw,8em)*2)] pt-[clamp(5em,21vh,12em)]'>
				<div className='relative pb-10'>
					<div className='mb-5 flex items-center gap-5'>
						<div className='flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#999d9e]'>
							<img
								src='/image/avatar1.jpg'
								alt='avatar'
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='text-7xl text-white'>Let's work</div>
					</div>
					<div className='text-7xl text-white'>together</div>
					<div className='absolute bottom-12 right-0 flex items-center justify-center'>
						<ArrowDownLeft color='white' />
					</div>
				</div>
				<div></div>
				<div></div>
			</div>
		</motion.footer>
	)
}
