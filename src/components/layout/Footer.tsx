import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// import { ArrowDownLeft } from 'lucide-react'

import Link from 'next/link'

export const Footer = () => {
	const container = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end'],
	})

	const y = useTransform(scrollYProgress, [0, 1], [0, 100])

	return (
		<motion.footer
			style={{ y }}
			ref={container}
			className='relative z-[-1] flex w-full flex-col overflow-hidden bg-[#141516] shadow-[0px_5px_0px_5px_#1c1d20]'
		>
			<div className='relative w-full p-4 sm:px-[calc(clamp(2.5em,8vw,8em)*2)] sm:pt-[clamp(5em,21vh,12em)]'>
				<div className='relative pb-20'>
					<div className='mb-5 flex items-center gap-5'>
						<div className='flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#999d9e]'>
							<img
								src='/image/avatar1.jpg'
								alt='avatar'
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='text-4xl text-white sm:text-7xl'>Let's work</div>
					</div>
					<div className='text-4xl text-white sm:text-7xl'>together</div>
					{/* <div className='absolute bottom-24 right-0 flex items-center justify-center sm:bottom-20'>
						<ArrowDownLeft color='white' />
					</div> */}
				</div>
				{/* <div className='relative pb-20'>
					<div className='relative order-2 w-full'>
						<div className='relative h-[1px] w-full bg-[rgba(255,255,255,0.2)]'></div>
						<RoundedButton className='absolute left-[calc(100%-400px)] top-[-90px] flex h-[180px] w-[180px] cursor-pointer items-center justify-center rounded-full bg-[#0077b6] text-white'>
							<p className='relative z-[1]'>Get in touch</p>
						</RoundedButton>
					</div>
				</div> */}
				<div className='flex flex-col items-center gap-5 sm:flex-row'>
					<div className='flex h-[4.25em] w-full items-center justify-center rounded-full border text-white sm:w-fit'>
						<p className='text-nowrap px-10'>+84 814 824 049</p>
					</div>
					<div className='flex h-[4.25em] w-full items-center justify-center rounded-full border text-white sm:w-fit'>
						<p className='text-nowrap px-10'>nguyennhuhuynhcm242@gmail.com</p>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-between px-5 pb-5 pt-[100px] text-white sm:px-10'>
				<div className='flex items-center justify-center'>
					<div>
						<div className='mb-5 opacity-50'>Version</div>
						<div>2025 © Edition</div>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<div>
						<div className='mb-5 opacity-50'>Socials</div>
						<div className='flex items-center gap-5'>
							<Link href='https://github.com/nhuuhuynhh' className='block'>
								Github
							</Link>
							<Link
								href='https://www.facebook.com/profile.php?id=100042009667753'
								className='block'
							>
								Facebook
							</Link>
						</div>
					</div>
				</div>
			</div>
		</motion.footer>
	)
}
