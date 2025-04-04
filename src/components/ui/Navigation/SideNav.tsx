import Link from 'next/link'
import { motion } from 'framer-motion'

import { slideIn } from '~/anims/sideNav'

interface ButtonProps {
	isActive: boolean
	toggleMenu: () => void
	className?: string
}

interface PerspectiveTextProps {
	label: string
}

const links = [
	{
		title: 'home',
		href: '/',
	},
	{
		title: 'work',
		href: '/work',
	},
	{
		title: 'about',
		href: '/about',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
]

const footerLinks = [
	{
		title: 'facebook',
		href: 'https://www.facebook.com/profile.php?id=100042009667753',
	},
	{
		title: 'github',
		href: 'https://github.com/nhuuhuynhh',
	},
]

export const ButtonSideMenu: React.FC<ButtonProps> = ({
	isActive,
	toggleMenu,
	className,
}) => {
	return (
		<div
			className={`${className} h-10 w-[100px] cursor-pointer overflow-hidden rounded-3xl`}
		>
			<motion.div
				className='relative h-full w-full'
				animate={{ top: isActive ? '-100%' : '0%' }}
				transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
			>
				<div className='group h-full w-full' onClick={toggleMenu}>
					<PerspectiveText label='Menu' />
				</div>
				<div className='group h-full w-full' onClick={toggleMenu}>
					<PerspectiveText label='Close' />
				</div>
			</motion.div>
		</div>
	)
}

const PerspectiveText: React.FC<PerspectiveTextProps> = ({ label }) => {
	return (
		<div
			style={{
				transformStyle: 'preserve-3d',
				transition: 'transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)',
			}}
			className='group-hover:rotate-x-90 flex h-full w-full flex-col items-center justify-center'
		>
			<p
				style={{
					transition: 'all 0.75s cubic-bezier(0.76, 0, 0.24, 1)',
				}}
				className='group-hover:rotate-y--100 pointer-events-none uppercase group-hover:opacity-0'
			>
				{label}
			</p>
			<p
				style={{
					transition: 'all 0.75s cubic-bezier(0.76, 0, 0.24, 1)',
					transform: 'rotateX(-90deg) translateY(14px)',
					transformOrigin: 'bottom center',
				}}
				className='pointer-events-none absolute uppercase opacity-0 group-hover:opacity-100'
			>
				{label}
			</p>
		</div>
	)
}

export const SideNav = () => {
	return (
		<div className='flex h-full flex-col justify-between overflow-hidden px-10 pb-[50px] pt-[100px]'>
			<div>
				<div className='mb-10 border-b border-[1px_solid_rgb(153,153,153)] pb-10 text-base capitalize text-[rgb(153,153,153)]'>
					<p>Navigation</p>
				</div>
				<div className='flex flex-col gap-4'>
					{links.map(({ title, href }, index) => (
						<div
							key={index}
							style={{ perspective: '120px', perspectiveOrigin: 'bottom' }}
						>
							<motion.div
								variants={slideIn}
								custom={index}
								animate='enter'
								exit='exit'
								className='text-5xl capitalize'
								key={index}
							>
								<Link href={href} className='block w-full'>
									{title}
								</Link>
							</motion.div>
						</div>
					))}
				</div>
			</div>
			<div>
				<div className='mb-4 text-start capitalize text-[rgb(153,153,153)]'>
					socials
				</div>
				<div className='flex flex-wrap gap-5'>
					{footerLinks.map(({ title, href }, index) => (
						<motion.div
							variants={slideIn}
							custom={index}
							initial='initial'
							animate='enter'
							exit='exit'
							key={index}
							className='mt-1 w-fit capitalize'
						>
							<div className='relative block after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-500 after:content-[""] hover:after:w-full'>
								<Link href={href}>{title}</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}
