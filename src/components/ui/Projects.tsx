'use client'

import { FC, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'

interface ModalState {
	active: boolean
	index: number
}

interface Project {
	src: string
	color: string
}

interface ModalProps {
	modal: ModalState
	projects: Project[]
}

interface ProjectProps {
	index: number
	title: string
	description: string
	href: string
	// eslint-disable-next-line no-unused-vars
	setModal: (modal: { active: boolean; index: number }) => void
}

const scaleAnimation = {
	initial: { scale: 0, x: '-50%', y: '-50%' },
	enter: {
		scale: 1,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
	},
	closed: {
		scale: 0,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
	},
}

const projects = [
	{
		title: 'SIXDO-SHOP',
		src: '/image/sixdo.jpg',
		color: 'rgb(224, 217, 209)',
		href: 'https://www.figma.com/design/lTNlZAEkoVauUK81LxXZkM/SIXDO-SHOP?node-id=0-1&t=yy3h1q9hsGwhGJCD-1',
		description: 'Design',
		year: 2025,
	},
	{
		title: 'WORKSPACE',
		src: '/image/workspace.jpg',
		color: 'rgb(224, 217, 209)',
		href: 'https://www.figma.com/design/lTNlZAEkoVauUK81LxXZkM/SIXDO-SHOP?node-id=0-1&t=yy3h1q9hsGwhGJCD-1',
		description: 'Design',
		year: 2025,
	},
]

const Modal: FC<ModalProps> = ({ modal, projects }) => {
	const { active, index } = modal
	const modalContainer = useRef<HTMLDivElement>(null)
	const cursor = useRef<HTMLDivElement>(null)
	const cursorLabel = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = modalContainer.current as HTMLDivElement
		const cursorEl = cursor.current as HTMLDivElement
		const cursorLabelEl = cursorLabel.current as HTMLDivElement

		let xMoveContainer = gsap.quickTo(container, 'left', {
			duration: 0.8,
			ease: 'power3',
		})

		let yMoveContainer = gsap.quickTo(container, 'top', {
			duration: 0.8,
			ease: 'power3',
		})

		let xMoveCursor = gsap.quickTo(cursorEl, 'left', {
			duration: 0.5,
			ease: 'power3',
		})

		let yMoveCursor = gsap.quickTo(cursorEl, 'top', {
			duration: 0.5,
			ease: 'power3',
		})

		let xMoveCursorLabel = gsap.quickTo(cursorLabelEl, 'left', {
			duration: 0.45,
			ease: 'power3',
		})

		let yMoveCursorLabel = gsap.quickTo(cursorLabelEl, 'top', {
			duration: 0.45,
			ease: 'power3',
		})

		const handleMouseMove = (e: MouseEvent) => {
			const { pageX, pageY } = e
			xMoveContainer(pageX)
			yMoveContainer(pageY)
			xMoveCursor(pageX)
			yMoveCursor(pageY)
			xMoveCursorLabel(pageX)
			yMoveCursorLabel(pageY)
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<>
			<motion.div
				id='modal'
				ref={modalContainer}
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'enter' : 'closed'}
				className='pointer-events-none absolute flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white'
			>
				<div
					style={{ top: `${index * -100}%` }}
					className='absolute h-full w-full transition-[top_0.5_cubic-bezier(0.76,0,0.24,1)]'
				>
					{projects.map(({ src, color }, index) => {
						return (
							<div
								className='flex h-full w-full items-center justify-center'
								style={{ backgroundColor: color }}
								key={`${index}`}
							>
								<Image
									src={`${src}`}
									width={300}
									height={0}
									alt='image'
									className='h-auto'
								/>
							</div>
						)
					})}
				</div>
			</motion.div>
			<motion.div
				ref={cursor}
				className='pointer-events-none absolute z-[2] flex h-20 w-20 items-center justify-center rounded-full bg-[#455ce9] text-sm text-white'
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'enter' : 'closed'}
			/>
			<motion.div
				ref={cursorLabel}
				className='pointer-events-none absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#455ce9] text-sm text-white'
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'enter' : 'closed'}
			>
				View
			</motion.div>
		</>
	)
}

const Project: FC<ProjectProps> = ({
	index,
	title,
	description,
	href,
	setModal,
}) => {
	return (
		<Link
			href={href}
			id='projects'
			onMouseEnter={() => setModal({ active: true, index })}
			onMouseLeave={() => setModal({ active: false, index })}
			className='group flex w-full cursor-pointer items-center justify-between border-t border-[1px_solid_rgb(201,201,201)] p-[calc(clamp(5em,21vh,12em)/3.5)_0_calc(clamp(5em,21vh,12em)/3)0] transition-all duration-200 last-of-type:border-b hover:opacity-50'
		>
			<div className='m-0 w-[70%] pl-[clamp(2em,8vw,8em)] text-6xl transition-all duration-500 group-hover:translate-x-[-10px]'>
				{title}
			</div>
			<div className='w-[30%] pl-[clamp(2em,4vw,2.5em)] text-xl transition-all duration-500 group-hover:translate-x-[10px]'>
				{description}
			</div>
		</Link>
	)
}

export const Projects = () => {
	const [modal, setModal] = useState<{ active: boolean; index: number }>({
		active: false,
		index: 0,
	})

	return (
		<>
			<div className='mx-auto hidden max-w-[100em] px-[clamp(2.5em,8vw,8em)] lg:block'>
				<div className='w-[70%] pb-[clamp(1.5em,4vw,2.5em)] pl-[clamp(2.5em,8vw,8em)] text-start uppercase text-[#1c1d20] opacity-50'>
					recent works
				</div>
				<ul className='relative flex flex-col items-center justify-center'>
					{projects.map(({ title, href, description }, index) => (
						<li className='w-full'>
							<Project
								index={index}
								title={title}
								setModal={setModal}
								key={index}
								href={href}
								description={description}
							/>
						</li>
					))}
				</ul>
				<Modal modal={modal} projects={projects} />
			</div>
			<div className='mx-auto max-w-[100em] px-[calc(6vw*0.75)] lg:hidden'>
				<ul className='relative flex w-full flex-wrap pt-[clamp(1.5em,4vw,2.5em)]'>
					{projects.map(({ title, href, src, description, year }, index) => (
						<li
							key={index}
							className='relative h-auto w-full overflow-hidden sm:w-1/2'
						>
							<div className='w-full px-[calc(6vw*0.25)] pb-20'>
								<Link
									className='relative flex flex-wrap overflow-hidden'
									href={href}
								>
									<div className='relative w-full pb-10'>
										<div className='relative w-full overflow-hidden bg-[#E9EAEB] before:block before:pt-[100px] after:block after:pb-[100px]'>
											<img
												src={src}
												alt={title}
												className='mx-auto w-[85%] bg-cover transition-all duration-500 hover:scale-110'
											/>
										</div>
									</div>
									<div className='relative w-full pb-[calc(clamp(1.5em,4vw,2.5em)/2)]'>
										<span className='relative block text-4xl'>{title}</span>
										<div className='mt-[calc(clamp(1.5em,4vw,2.5em)/2)] h-[1px] w-full bg-[rgba(28,29,32,0.175)]'></div>
									</div>
									<div className='flex w-full items-center justify-between'>
										<div>{description}</div>
										<div>{year}</div>
									</div>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
