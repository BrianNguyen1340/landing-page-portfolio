'use client'

import { FC, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { paths } from '~/utils/constants'
import { curvedNav, scale, slide } from '~/anims/curvedNav'

const navItems = [
	{
		href: paths.home,
		content: 'home',
	},
	{
		href: paths.work,
		content: 'work',
	},
	{
		href: paths.about,
		content: 'about',
	},
	{
		href: paths.contact,
		content: 'contact',
	},
]

const footerLinks = [
	{
		href: 'https://www.facebook.com/profile.php?id=100042009667753',
		content: 'facebook',
	},
	{
		href: 'https://github.com/nhuuhuynhh',
		content: 'github',
	},
]

interface MenuLinkProps {
	data: {
		title: string
		href: string
		index: number
	}
	isActive: boolean
	// eslint-disable-next-line no-unused-vars
	setSelectedIndicator: (href: string) => void
}

interface CurvedNavProps {
	className?: string
}

const MenuLink: FC<MenuLinkProps> = ({
	data,
	isActive,
	setSelectedIndicator,
}) => {
	const { title, href, index } = data
	return (
		<motion.div
			className='relative mb-10 flex items-center capitalize'
			onMouseEnter={() => setSelectedIndicator(href)}
			custom={index}
			variants={slide}
			initial='initial'
			animate='enter'
			exit='exit'
		>
			<motion.div
				variants={scale}
				animate={isActive ? 'open' : 'closed'}
				className='absolute -left-[30px] h-[10px] w-[10px] rounded-full bg-white'
			/>
			<Link href={href}>{title}</Link>
		</motion.div>
	)
}

const Curved = () => {
	const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
	const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

	const curve = {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: {
				duration: 1,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		exit: {
			d: initialPath,
			transition: {
				duration: 0.8,
				ease: [0.76, 0, 0.24, 1],
			},
		},
	}

	return (
		<svg className='absolute left-[-99px] top-0 z-[-1] h-screen w-full fill-[rgb(41,41,41)] stroke-none'>
			<motion.path
				variants={curve}
				initial='initial'
				animate='enter'
				exit='exit'
			/>
		</svg>
	)
}

const Footer = () => {
	return (
		<>
			<div className='mb-4 text-start capitalize text-[rgb(153,153,153)]'>
				socials
			</div>
			<div className='flex items-center gap-5'>
				{footerLinks.map(({ href, content }, index) => (
					<div key={index} className='flex justify-between gap-10 capitalize'>
						<Link
							href={href}
							className='relative block after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-500 after:content-[""] hover:after:w-full'
						>
							{content}
						</Link>
					</div>
				))}
			</div>
		</>
	)
}

export const CurvedNav: FC<CurvedNavProps> = ({ className }) => {
	const pathname = usePathname()
	const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname)

	return (
		<motion.nav
			id='curved-nav'
			className={`${className} fixed right-0 top-0 z-[3] h-screen w-[500px] bg-[rgb(41,41,41)] text-white`}
			variants={curvedNav}
			initial='initial'
			animate='enter'
			exit='exit'
		>
			<div className='flex h-full flex-col justify-between p-[100px]'>
				<div
					className='flex flex-col gap-3 text-[40px]'
					onMouseLeave={() => setSelectedIndicator(pathname)}
				>
					<div className='mb-10 border-b border-[1px_solid_rgb(153,153,153)] pb-10 text-base capitalize text-[rgb(153,153,153)]'>
						<p>Navigation</p>
					</div>
					{navItems.map(({ content, href }, index) => (
						<MenuLink
							key={index}
							data={{ title: content, href, index }}
							isActive={selectedIndicator == href}
							setSelectedIndicator={setSelectedIndicator}
						/>
					))}
				</div>
				<Footer />
			</div>
			<Curved />
		</motion.nav>
	)
}
