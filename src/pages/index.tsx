import { motion } from 'framer-motion'

import { Curved } from '~/components/layout/transition/Curved'
import { AvatarBackground } from '~/components/ui/AvatarBackground'
import { Hanger } from '~/components/ui/Hanger'
import { HomeIntro } from '~/components/ui/HomeIntro'
import { InfiniteTextMoveOnScroll } from '~/components/ui/InfiniteText'
import { JobTitle } from '~/components/ui/JobTitle'
import { Projects } from '~/components/ui/Projects'
import useTitle from '~/hooks/useTitle'

const index = () => {
	useTitle('Nguyen Nhu Huynh - Designer')

	return (
		<Curved>
			<div id='home-page'>
				<motion.section
					variants={{
						initial: {
							y: 300,
						},
						enter: {
							y: 0,
							transition: {
								duration: 1,
								ease: [0.33, 1, 0.68, 1],
								delay: 1.2,
							},
						},
					}}
					initial='initial'
					animate='enter'
					className='relative overflow-hidden bg-[#feefd0]'
				>
					<InfiniteTextMoveOnScroll />
					<Hanger />
					<JobTitle />
					<AvatarBackground />
				</motion.section>
				<section className='mb-20 py-[clamp(5em,21vh,12em)] md:mb-0'>
					<HomeIntro />
				</section>
				<section>
					<Projects />
				</section>
			</div>
		</Curved>
	)
}

export default index
