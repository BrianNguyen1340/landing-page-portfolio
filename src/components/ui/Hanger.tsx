import RotateEarth from '~/components/ui/RotateEarth'

const Hanger = () => {
	return (
		<div className='absolute left-0 top-1/3 z-10 hidden text-white lg:inline-block'>
			<p className='absolute top-1/2 m-0 -translate-y-1/2 px-[4em] text-lg'>
				<span className='block'>Located </span>
				<span className='block'>in </span>
				<span className='block'>Vietnam</span>
			</p>
			<svg
				width='300px'
				height='121px'
				viewBox='0 0 300 121'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
					<g fill='#1c1d20'>
						<path d='M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z'></path>
					</g>
				</g>
			</svg>
			<RotateEarth />
		</div>
	)
}

export default Hanger
