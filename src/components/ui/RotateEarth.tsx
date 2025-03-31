const RotateEarth = () => {
	return (
		<div className='absolute right-[2.2em] top-[2.2em] h-[3em] w-[3em]'>
			<div className='earth relative h-full w-full'>
				<div className='absolute box-border h-full w-full rounded-full border-2 border-black' />

				<div
					className='meridian absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 0 } as React.CSSProperties}
				/>
				<div
					className='meridian absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 1 } as React.CSSProperties}
				/>
				<div
					className='meridian absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 2 } as React.CSSProperties}
				/>
				<div
					className='meridian absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 3 } as React.CSSProperties}
				/>
				<div
					className='meridian absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 4 } as React.CSSProperties}
				/>
				<div
					className='meridian absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 5 } as React.CSSProperties}
				/>

				<div
					className='parallel absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 1 } as React.CSSProperties}
				/>
				<div
					className='parallel absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 2 } as React.CSSProperties}
				/>
				<div
					className='parallel absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': 3 } as React.CSSProperties}
				/>
				<div
					className='parallel absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': -1 } as React.CSSProperties}
				/>
				<div
					className='parallel absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': -2 } as React.CSSProperties}
				/>
				<div
					className='parallel absolute h-full w-full rounded-full border-2 border-black'
					style={{ '--i': -3 } as React.CSSProperties}
				/>
			</div>
		</div>
	)
}

export default RotateEarth
