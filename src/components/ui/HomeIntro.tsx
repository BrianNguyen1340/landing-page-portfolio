import Link from 'next/link'

import { paths } from '~/utils/constants'
import { RoundedButton } from '~/components/ui/RoundedButton'
import { CharacterOpacity } from '~/components/ui/TextAnimation/CharacterOpacity'

export const HomeIntro = () => {
	return (
		<div className='relative px-[calc(6vw*2)]'>
			<div className='flex w-full flex-col items-start justify-between md:flex-row'>
				<CharacterOpacity
					className='w-full text-2xl md:w-[70%] md:pr-14 md:text-4xl'
					paragraph={
						'I am particularly interested in optimizing user experiences, from layout to interactive behaviors. I am always eager to learn and improve, striving to create designs that are not only visually appealing but also bring real value to the product.'
					}
				/>
				<CharacterOpacity
					paragraph={
						'The combination of my passion for design, code & interaction positions me in a unique place in the web design world.'
					}
					className='w-full pt-10 text-base md:w-[30%] md:pl-14 md:pt-2 md:text-xl'
				/>
				<RoundedButton className='absolute right-0 top-full z-[1] flex h-[clamp(9em,12vw,11em)] w-[clamp(9em,12vw,11em)] -translate-x-1/2 translate-y-1/4 cursor-pointer items-center justify-center rounded-full bg-[#1c1d20] text-white md:top-[80%]'>
					<Link
						href={paths.about}
						className='relative z-[2] flex h-full w-full items-center justify-center text-xl'
					>
						About me
					</Link>
				</RoundedButton>
			</div>
		</div>
	)
}
