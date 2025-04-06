import { motion } from 'framer-motion'

import { Curved } from '~/components/layout/transition/Curved'
import { AvatarBackground } from '~/components/ui/AvatarBackground'
import { Hanger } from '~/components/ui/Hanger'
import { HomeIntro } from '~/components/ui/HomeIntro'
import { InfiniteTextMoveOnScroll } from '~/components/ui/InfiniteText'
import { JobTitle } from '~/components/ui/JobTitle'
import { Projects } from '~/components/ui/Projects'
import SlidingImage from '~/components/ui/SlidingImage'
import useTitle from '~/hooks/useTitle'

const index = () => {
	useTitle('Nguyen Nhu Huynh - Designer')

	return (
		<Curved>
			<div>
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
				<HomeIntro />
				<Projects />
				<SlidingImage />
			</div>
		</Curved>
	)
}

export default index
