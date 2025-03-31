'use client'

import { ButtonHTMLAttributes, FC, useEffect, useRef } from 'react'
import gsap from 'gsap'

import Magnetic from '~/components/ui/Magnetic'

interface RoundedButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {}

const RoundedButton: FC<RoundedButtonProps> = ({ children, ...props }) => {
	const circleRef = useRef<HTMLDivElement>(null)
	const timelineRef = useRef<gsap.core.Timeline | null>(null)

	useEffect(() => {
		if (!circleRef.current) return

		timelineRef.current = gsap
			.timeline({ paused: true })
			.to(
				circleRef.current,
				{ top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
				'enter',
			)
			.to(
				circleRef.current,
				{ top: '-150%', width: '125%', duration: 0.25 },
				'exit',
			)
	}, [])

	const handleMouseEnter = () => {
		if (timelineRef.current) {
			timelineRef.current.tweenFromTo('enter', 'exit')
		}
	}

	const handleMouseLeave = () => {
		if (timelineRef.current) {
			gsap.delayedCall(0.3, () => {
				timelineRef.current?.play()
			})
		}
	}

	return (
		<Magnetic>
			<div
				style={{ border: '1px solid rgb(136, 136, 136)', overflow: 'hidden' }}
				className='group relative flex cursor-pointer items-center justify-center rounded-[3em] px-[60px] pb-[60px] pt-[15px]'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				{...props}
			>
				{children}
				<div
					ref={circleRef}
					className='absolute top-full h-[150%] w-full rounded-full bg-[#455ce9]'
				/>
			</div>
		</Magnetic>
	)
}

export default RoundedButton
