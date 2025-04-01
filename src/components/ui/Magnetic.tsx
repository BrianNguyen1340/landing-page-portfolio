'use client'

import { cloneElement, FC, ReactElement, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface MagneticProps {
	children: ReactElement
}

export const Magnetic: FC<MagneticProps> = ({ children }) => {
	const magnetic = useRef<HTMLElement | null>(null)

	useEffect(() => {
		const xTo = gsap.quickTo(magnetic.current, 'x', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)',
		})
		const yTo = gsap.quickTo(magnetic.current, 'y', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)',
		})

		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e
			if (magnetic.current) {
				const { height, width, left, top } =
					magnetic.current.getBoundingClientRect()
				const x = clientX - (left + width / 2)
				const y = clientY - (top + height / 2)
				xTo(x * 0.5)
				yTo(y * 0.5)
			}
		}

		const handleMouseLeave = () => {
			xTo(0)
			yTo(0)
		}

		magnetic.current?.addEventListener('mousemove', handleMouseMove)
		magnetic.current?.addEventListener('mouseleave', handleMouseLeave)

		return () => {
			magnetic.current?.removeEventListener('mousemove', handleMouseMove)
			magnetic.current?.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [children])

	return cloneElement(children, { ref: magnetic })
}
