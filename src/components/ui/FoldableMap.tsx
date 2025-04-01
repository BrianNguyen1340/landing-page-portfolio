'use client'

import {
	motion,
	MotionStyle,
	useMotionValue,
	useMotionValueEvent,
	useTransform,
} from 'framer-motion'
import { useState } from 'react'

export const FoldableMap = () => {
	const [isFolded, setIsFolded] = useState<boolean>(false)

	const xDrag = useMotionValue(0)
	const xLeftSection = useTransform(xDrag, [0, 300], ['100%', '0%'])
	const xRightSection = useTransform(xDrag, [0, 300], ['-100%', '0%'])
	const centerScale = useTransform(xDrag, [150, 300], [0, 1])
	const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1])

	useMotionValueEvent(xDrag, 'change', (currentX) => {
		if (currentX > 260) {
			setIsFolded(false)
		} else {
			setIsFolded(true)
		}
	})

	return (
		<div className='mt-5 overflow-clip'>
			<motion.div
				animate={isFolded ? 'folded' : 'open'}
				variants={{
					open: {
						scale: 1,
					},
					folded: {
						scale: 0.9,
					},
				}}
				initial='folded'
			>
				<div className='mx-auto grid aspect-video max-h-[80vh] cursor-pointer'>
					<div className='grid aspect-video h-full w-full grid-cols-3 [grid-area:1/1]'>
						<motion.div
							style={{ x: xLeftSection, skewY: '-1deg' }}
							className='map-image origin-bottom-right border-r border-[rgba(255,255,255,0.1)] shadow-2xl'
						/>
						<motion.div
							style={
								{
									scaleX: centerScale,
									'--brightness': centerBrightness,
								} as MotionStyle
							}
							className='map-image brightness-[--brightness]'
						/>
						<motion.div
							style={{ x: xRightSection, skewY: '1deg' }}
							className='map-image origin-bottom-left border-l border-[rgba(255,255,255,0.1)] shadow-2xl'
						/>
					</div>
					<motion.div
						drag='x'
						_dragX={xDrag}
						dragConstraints={{ left: 0, right: 300 }}
						dragTransition={{
							modifyTarget: (target) => {
								return target > 150 ? 300 : 0
							},
							timeConstant: 45,
						}}
						className='relative z-10 [grid-area:1/1]'
					/>
				</div>
			</motion.div>
		</div>
	)
}
