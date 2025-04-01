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
				<section className='relative overflow-hidden'>
					<InfiniteTextMoveOnScroll />
					<Hanger />
					<JobTitle />
					<AvatarBackground />
				</section>
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
