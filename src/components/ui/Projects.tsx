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
				className='pointer-events-none absolute z-10 flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white'
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
				className='pointer-events-none absolute z-[2] flex h-20 w-20 items-center justify-center rounded-full bg-[#455ce9] bg-transparent text-sm text-white'
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'enter' : 'closed'}
			>
				View
			</motion.div>
		</>
	)
}

interface ProjectProps {
	index: number
	title: string
	href: string
	// eslint-disable-next-line no-unused-vars
	setModal: (modal: { active: boolean; index: number }) => void
}

const Project: FC<ProjectProps> = ({ index, title, href, setModal }) => {
	return (
		<Link
			href={href}
			id='projects'
			onMouseEnter={() => setModal({ active: true, index })}
			onMouseLeave={() => setModal({ active: false, index })}
			className='group flex w-full cursor-pointer items-center justify-between border-t border-[1px_solid_rgb(201,201,201)] px-[100px] py-[50px] transition-all duration-200 last-of-type:border-b hover:opacity-50'
		>
			<h2 className='m-0 text-6xl transition-all duration-500 group-hover:translate-x-[-10px]'>
				{title}
			</h2>
			<p className='transition-all duration-500 group-hover:translate-x-[10px]'>
				Design & Development
			</p>
		</Link>
	)
}

const projects = [
	{
		title: 'SIXDO-SHOP',
		src: '/image/sixdo.png',
		color: '#000',
		href: 'https://www.figma.com/design/lTNlZAEkoVauUK81LxXZkM/SIXDO-SHOP?node-id=0-1&t=yy3h1q9hsGwhGJCD-1',
	},
	{
		title: 'SIXDO-SHOP',
		src: '/image/sixdo.png',
		color: '#000',
		href: 'https://www.figma.com/design/lTNlZAEkoVauUK81LxXZkM/SIXDO-SHOP?node-id=0-1&t=yy3h1q9hsGwhGJCD-1',
	},
]

const Projects = () => {
	const [modal, setModal] = useState<{ active: boolean; index: number }>({
		active: false,
		index: 0,
	})

	return (
		<>
			<div className='mx-auto w-[1000px] pb-[clamp(1.5em,4vw,2.5em)] text-start uppercase text-[#1c1d20] opacity-50'>
				recent works
			</div>
			<ul className='relative mx-auto flex w-[1200px] flex-col items-center justify-center'>
				{projects.map(({ title, href }, index) => (
					<li className='w-full'>
						<Project
							index={index}
							title={title}
							setModal={setModal}
							key={index}
							href={href}
						/>
					</li>
				))}
			</ul>
			<Modal modal={modal} projects={projects} />
		</>
	)
}

export default Projects
