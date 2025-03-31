import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import { slideIn } from '~/anims/sideMenu'

interface ButtonProps {
	isActive: boolean
	toggleMenu: () => void
	className?: string
}

interface PerspectiveTextProps {
	label: string
}

interface SideNavProps {
	onLinkClick: () => void
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
		href: '/https://www.facebook.com/profile.php?id=100042009667753',
	},
	{
		title: 'github',
		href: '/https://github.com/nhuuhuynhh',
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
					transform: 'rotateX(-90deg) translateY(9px)',
					transformOrigin: 'bottom center',
				}}
				className='pointer-events-none absolute uppercase opacity-0 group-hover:opacity-100'
			>
				{label}
			</p>
		</div>
	)
}

const SideNav: FC<SideNavProps> = ({ onLinkClick }) => {
	return (
		<div className='flex h-full flex-col justify-between overflow-hidden px-10 pb-[50px] pt-[100px]'>
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
							<Link href={href} className='block w-full' onClick={onLinkClick}>
								{title}
							</Link>
						</motion.div>
					</div>
				))}
			</div>
			<div className='flex flex-wrap'>
				{footerLinks.map(({ title, href }, index) => (
					<motion.div
						variants={slideIn}
						custom={index}
						initial='initial'
						animate='enter'
						exit='exit'
						key={index}
						className='mt-1 w-1/2 capitalize'
					>
						<Link href={href} className='block w-full' onClick={onLinkClick}>
							{title}
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default SideNav
