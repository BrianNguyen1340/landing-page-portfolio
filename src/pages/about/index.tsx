import useTitle from '~/hooks/useTitle'
// import Inner from '~/components/layout/Inner'
// import Stairs from '~/components/layout/Stairs'
import Curved from '~/components/layout/Curved'

const About = () => {
	useTitle('About - Nguyen Nhu Huynh')

	return (
		<>
			{/* <Inner>
				<section>About</section>
			</Inner> */}
			{/* <Stairs>
				<section>About</section>
			</Stairs> */}
			<Curved>
				<section>About</section>
			</Curved>
		</>
	)
}

export default About
