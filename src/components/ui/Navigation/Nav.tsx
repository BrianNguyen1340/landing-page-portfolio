import Link from 'next/link'

import { paths } from '~/utils/constants'
import Magnetic from '~/components/ui/Magnetic'

const navItems = [
	{
		href: paths.work,
		content: 'work',
	},
	{
		href: paths.about,
		content: 'about',
	},
	{
		href: paths.contact,
		content: 'contact',
	},
]

const Nav = () => {
	return (
		<nav id='nav' className='hidden sm:block'>
			<ul className='flex items-center'>
				{navItems.map(({ href, content }, index) => (
					<Magnetic key={index}>
						<li className='group relative flex flex-col p-4 capitalize'>
							<Link
								href={href}
								className='relative transition-all duration-500 after:absolute after:-bottom-1.5 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-black group-hover:scale-[1.2] group-hover:after:w-1'
							>
								{content}
							</Link>
						</li>
					</Magnetic>
				))}
			</ul>
		</nav>
	)
}

export default Nav
