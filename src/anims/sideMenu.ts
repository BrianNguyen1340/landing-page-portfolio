export const sideMenu = {
	open: {
		width: '100%',
		height: '100vh',
		borderRadius: 0,
		backgroundColor: 'black',
		color: 'white',
		top: '0',
		right: '0',
		transition: {
			duration: 0.75,
			type: 'tween',
			ease: [0.76, 0, 0.24, 1],
		},
	},
	closed: {
		width: '100px',
		height: '40px',
		borderRadius: '24px',
		top: '24px',
		right: '24px',
		transition: {
			duration: 0.75,
			delay: 0.35,
			type: 'tween',
			ease: [0.76, 0, 0.24, 1],
		},
	},
}

export const perspective = {
	initial: {
		opacity: 0,
		rotateX: 90,
		translateY: 80,
		translateX: -20,
	},
	enter: (i: number) => ({
		opacity: 1,
		rotateX: 0,
		translateY: 0,
		translateX: 0,
		transition: {
			duration: 0.65,
			delay: 0.5 + i * 0.1,
			ease: [0.215, 0.61, 0.355, 1],
			opacity: {
				duration: 0.35,
			},
		},
	}),
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
			type: 'linear',
			ease: [0.76, 0, 0.24, 1],
		},
	},
}

export const slideIn = {
	initial: {
		opacity: 0,
		y: 20,
	},
	enter: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.75 + i * 0.1,
			ease: [0.215, 0.61, 0.355, 1],
		},
	}),
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
			type: 'tween',
			ease: 'easeInOut',
		},
	},
}
