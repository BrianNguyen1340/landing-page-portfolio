import { FC, ReactNode } from 'react'

interface MainLayoutProps {
	children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<main className='relative h-auto w-screen bg-transparent'>
			<div className='relative box-border w-screen will-change-transform'>
				{children}
			</div>
		</main>
	)
}
