// Package Imports
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

// Component Imports
import ReactQueryProvider from '@/providers/react-query-provider'

// Asset Imports
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Next.js & React Query',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased p-20`}
				suppressHydrationWarning
			>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	)
}
