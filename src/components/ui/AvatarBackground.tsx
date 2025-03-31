const AvatarBackground = () => {
	return (
		<div className='relative h-screen overflow-hidden bg-[#feefd0]'>
			<div className='absolute left-0 top-0 z-[1] h-full w-full'>
				<img
					src='/image/avatar1.png'
					alt='avatar'
					className='absolute left-1/2 top-[10%] h-full w-auto -translate-x-1/2 object-cover align-middle'
				/>
			</div>
		</div>
	)
}

export default AvatarBackground
