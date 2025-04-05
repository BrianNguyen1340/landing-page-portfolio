'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'

import { sideNav } from '~/anims/sideNav'
import { Logo } from '~/components/ui/Logo'
import { Nav } from '~/components/ui/Navigation/Nav'
import { CurvedNav } from '~/components/ui/Navigation/CurvedNav'
import { RoundedButton } from '~/components/ui/RoundedButton'
import { ButtonSideMenu, SideNav } from '~/components/ui/Navigation/SideNav'

export const Header = () => {
	const headerRef = useRef<HTMLDivElement | null>(null)
	const curvedNavButtonRef = useRef<HTMLDivElement | null>(null)
	const curvedNavRef = useRef<HTMLDivElement | null>(null)

	const [isCurvedNavActive, setIsCurvedNavActive] = useState<boolean>(false)
	const [isSideMenuActive, setIsSideMenuActive] = useState<boolean>(false)

	const pathname = usePathname()

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				curvedNavRef.current &&
				!curvedNavRef.current.contains(event.target as Node) &&
				curvedNavButtonRef.current &&
				!curvedNavButtonRef.current.contains(event.target as Node)
			) {
				setIsCurvedNavActive(false)
			}
		}

		if (isCurvedNavActive) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isCurvedNavActive])

	useEffect(() => {
		if (isCurvedNavActive) setIsCurvedNavActive(false)
		if (isSideMenuActive) setIsSideMenuActive(false)
	}, [pathname])

	useEffect(() => {
		const handleScroll = () => {
			if (isSideMenuActive) {
				setIsSideMenuActive(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isSideMenuActive])

	useLayoutEffect(() => {
		if (!curvedNavButtonRef.current) return

		gsap.registerPlugin(ScrollTrigger)
		gsap.to(curvedNavButtonRef.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				onLeave: () => {
					gsap.to(curvedNavButtonRef.current, {
						scale: 1,
						duration: 0.25,
						ease: 'power1.out',
					})
				},
				onEnterBack: () => {
					gsap.to(curvedNavButtonRef.current, {
						scale: 0,
						duration: 0.25,
						ease: 'power1.out',
						onComplete: () => setIsCurvedNavActive(false),
					})
				},
			},
		})
	}, [])

	return (
		<>
			<header
				ref={headerRef}
				className='absolute top-0 z-[1] flex w-full items-center justify-between px-6 pt-6 text-lg text-black'
			>
				<Logo />
				<Nav />
				<motion.div
					className='absolute bg-[rgb(41,41,41)] text-white sm:hidden'
					variants={sideNav}
					animate={isSideMenuActive ? 'open' : 'closed'}
					initial='closed'
				>
					<AnimatePresence>{isSideMenuActive && <SideNav />}</AnimatePresence>
				</motion.div>
				<ButtonSideMenu
					isActive={isSideMenuActive}
					toggleMenu={() => setIsSideMenuActive(!isSideMenuActive)}
					className='font-semibold tracking-wider text-[#fca311] sm:hidden'
				/>
			</header>
			<div ref={curvedNavButtonRef} className='fixed right-0 z-[4] scale-0'>
				<RoundedButton
					onClick={() => setIsCurvedNavActive(!isCurvedNavActive)}
					className='relative m-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[#1c1d20]'
				>
					<div
						className={`relative z-[1] w-full before:relative before:top-[5px] before:m-auto before:block before:h-[1px] before:w-[30%] before:bg-white before:transition-[transform_0.3s] before:content-[""] after:relative after:top-[-5px] after:m-auto after:block after:h-[1px] after:w-[30%] after:bg-white after:transition-[transform_0.3s] after:content-[""] ${isCurvedNavActive ? 'before:top-0 before:-rotate-45 after:top-[1px] after:rotate-45' : ''}`}
					/>
				</RoundedButton>
			</div>
			<AnimatePresence mode='wait'>
				{isCurvedNavActive && (
					<div ref={curvedNavRef}>
						<CurvedNav />
					</div>
				)}
			</AnimatePresence>
			{isCurvedNavActive && (
				<div className='fixed z-[1] h-full w-full bg-black opacity-30' />
			)}
		</>
	)
}
