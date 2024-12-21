'use client'

// Package Imports
import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

// Utility Imports
import { getQueryClient } from '@/lib/queryClient'

type IRootProviderProps = {
	children: ReactNode
}

const ReactQueryProvider = ({ children }: IRootProviderProps) => {
	const queryClient = getQueryClient()
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
