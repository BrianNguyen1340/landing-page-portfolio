import { FC } from 'react'

interface TypeographyPreloaderProps {
	className?: string
}

const TypeographyPreloader: FC<TypeographyPreloaderProps> = ({ className }) => {
	return (
		<div className={`${className}`}>
			<button
				style={{ background: 'none' }}
				className='absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer border-none text-[2em] font-light uppercase underline outline-none'
			>
				Enter
			</button>
			<div className='text-container'></div>
			<div className='text-wrapper'>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
				<div className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					voluptatum saepe dicta eius numquam officia.
				</div>
			</div>
			<div className='header'>Modern Portfolio</div>
		</div>
	)
}

export default TypeographyPreloader
