import useTitle from '~/hooks/useTitle'
// import Inner from '~/components/layout/Inner'
// import Stairs from '~/components/layout/Stairs'
import Curved from '~/components/layout/Curved'

const Work = () => {
	useTitle('Work - Nguyen Nhu Huynh')

	return (
		<>
			{/* <Inner>
				<section>Work</section>
			</Inner> */}
			{/* <Stairs>
				<section>Work</section>
			</Stairs> */}
			<Curved>
				<section>Work</section>
			</Curved>
		</>
	)
}

export default Work
