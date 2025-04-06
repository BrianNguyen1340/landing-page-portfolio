// import Link from 'next/link'

// import { paths } from '~/utils/constants'
// import { RoundedButton } from '~/components/ui/RoundedButton'
import { CharacterOpacity } from '~/components/ui/TextAnimation/CharacterOpacity'

export const HomeIntro = () => {
	return (
		<div className='relative px-[calc(clamp(2.5em,8vw,8em)*2)] py-[clamp(5em,21vh,12em)]'>
			<div className='flex w-full flex-col items-start justify-between md:flex-row'>
				<CharacterOpacity
					className='w-full text-2xl md:w-[70%] md:pr-14 md:text-4xl'
					paragraph={
						'I"m a passionate young designer on a journey to explore and create inspiring visual experiences.'
					}
				/>
				<CharacterOpacity
					paragraph={
						'Though I"m just starting out, I"m constantly learning, improving my skills, and putting heart into every design with care and passion.'
					}
					className='w-full pt-10 text-base md:w-[30%] md:pl-14 md:pt-2 md:text-xl'
				/>
				{/* <RoundedButton className='absolute right-20 top-[90%] z-[1] flex h-[clamp(9em,12vw,11em)] w-[clamp(9em,12vw,11em)] -translate-x-1/2 translate-y-1/4 cursor-pointer items-center justify-center rounded-full bg-[#1c1d20] text-white md:top-[70%]'>
					<Link
						href={paths.about}
						className='relative z-[2] flex h-full w-full items-center justify-center text-xl'
					>
						About me
					</Link>
				</RoundedButton> */}
			</div>
		</div>
	)
}
