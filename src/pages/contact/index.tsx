import useTitle from '~/hooks/useTitle'
// import Inner from '~/components/layout/Inner'
// import Stairs from '~/components/layout/Stairs'
import { Curved } from '~/components/layout/transition/Curved'

const Contact = () => {
	useTitle('Contact - Nguyen Nhu Huynh')

	return (
		<>
			{/* <Inner>
				<section>Contact</section>
			</Inner> */}
			{/* <Stairs>
				<section>Contact</section>
			</Stairs> */}
			<Curved>
				<section>Contact</section>
			</Curved>
		</>
	)
}

export default Contact
