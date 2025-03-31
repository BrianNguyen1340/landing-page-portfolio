import { FC, ReactNode } from 'react'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<main className='relative h-auto w-screen overflow-hidden bg-transparent'>
			<div className='relative box-border w-screen will-change-transform'>
				{children}
			</div>
		</main>
	)
}

export default MainLayout
