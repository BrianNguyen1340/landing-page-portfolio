import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

import { RoundedButton } from '~/components/ui/RoundedButton'
import { Magnetic } from '~/components/ui/Magnetic'

export const Footer = () => {
	const container = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end'],
	})

	const x = useTransform(scrollYProgress, [0, 1], [0, 100])
	const y = useTransform(scrollYProgress, [0, 1], [-500, 100])

	const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

	return <motion.footer ref={container}>footer</motion.footer>
}
