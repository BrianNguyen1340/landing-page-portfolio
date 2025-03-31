import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export const paths = {
	home: '/',
	work: '/work',
	about: '/about',
	contact: '/contact',
}
