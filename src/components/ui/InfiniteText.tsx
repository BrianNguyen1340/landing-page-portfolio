import ScrollVelocity from '~/components/ui/TextAnimation/ScrollVelocity'

const InfiniteTextMoveOnScroll = () => {
	return (
		<div className='absolute top-[calc(100vh-200px)] z-[2] h-[150px]'>
			<ScrollVelocity texts={['Nguyen Nhu Huynh -']} className='text-[150px]' />
		</div>
	)
}

export default InfiniteTextMoveOnScroll
