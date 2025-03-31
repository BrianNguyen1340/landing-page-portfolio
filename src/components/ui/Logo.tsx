import Link from 'next/link'

import { paths } from '~/utils/constants'

const Logo = () => {
	return (
		<Link
			href={paths.home}
			className={`group flex items-center justify-center overflow-hidden`}
		>
			<p className='transition-all duration-500 group-hover:rotate-[360deg]'>
				©
			</p>
			<div className='relative ml-1 flex items-center justify-between overflow-hidden whitespace-nowrap transition-all duration-500'>
				<div className='relative flex items-center justify-center transition-all duration-500 group-hover:-translate-x-[100%]'>
					Code by
				</div>
				<div className='relative flex items-center justify-center pl-[0.3em] transition-all duration-500 group-hover:-translate-x-[60px]'>
					Brian
				</div>
				<div className='absolute left-[90px] flex items-center justify-center pl-[1em] transition-all duration-500 group-hover:-translate-x-[60px]'>
					Nguyen
				</div>
			</div>
		</Link>
	)
}

export default Logo
