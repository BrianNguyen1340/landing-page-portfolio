import ScrollVelocity from '~/components/ui/TextAnimation/ScrollVelocity'

const InfiniteTextMoveOnScroll = () => {
	return (
		<div className='absolute top-[calc(100vh-150px)] z-[2]'>
			<ScrollVelocity texts={['Nguyen Nhu Huynh -']} />
		</div>
	)
}

export default InfiniteTextMoveOnScroll
