import Link from 'next/link'

import { paths } from '~/utils/constants'
import FuzzyText from '~/components/ui/TextAnimation/FuzzyText'
import GradientText from '~/components/ui/TextAnimation/GradientText'

export default function Custom404() {
	return (
		<div className='z-[99999] flex min-h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-black'>
			<FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
				404
			</FuzzyText>
			<FuzzyText
				baseIntensity={0.2}
				hoverIntensity={0.5}
				enableHover={true}
				fontSize={50}
			>
				Not Found
			</FuzzyText>
			<Link href={paths.home} className='text-white'>
				<GradientText
					colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
					animationSpeed={3}
					showBorder={false}
					className='text-3xl'
				>
					Back to Home!
				</GradientText>
			</Link>
		</div>
	)
}
