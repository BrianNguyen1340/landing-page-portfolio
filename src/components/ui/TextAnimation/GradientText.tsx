import { FC, ReactNode } from 'react'

interface GradientTextProps {
	children: ReactNode
	className?: string
	colors?: string[]
	animationSpeed?: number
	showBorder?: boolean
}

export const GradientText: FC<GradientTextProps> = ({
	children,
	className = '',
	colors = ['#ff8c00', '#f4a261', '#e76f51'],
	animationSpeed = 8,
	showBorder = false,
}) => {
	const gradientStyle = {
		backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
		animationDuration: `${animationSpeed}s`,
	}

	return (
		<div
			className={`relative mx-auto flex max-w-fit cursor-pointer flex-row items-center justify-center overflow-hidden rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 ${className}`}
		>
			{showBorder && (
				<div
					className='pointer-events-none absolute inset-0 z-0 animate-gradient bg-cover'
					style={{
						...gradientStyle,
						backgroundSize: '300% 100%',
					}}
				>
					<div
						className='absolute inset-0 z-[-1] rounded-[1.25rem] bg-black'
						style={{
							width: 'calc(100% - 2px)',
							height: 'calc(100% - 2px)',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					></div>
				</div>
			)}
			<div
				className='z-2 relative flex h-full animate-gradient items-center justify-center bg-cover text-transparent'
				style={{
					...gradientStyle,
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					backgroundSize: '300% 100%',
				}}
			>
				{children}
			</div>
		</div>
	)
}
