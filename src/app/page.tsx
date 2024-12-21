// Package Imports
import { Metadata } from 'next'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

// Component Imports
import UserList from '@/components/user-list'

// Utility Imports
import { getQueryClient } from '@/lib/queryClient'
import { usersQueryOptions } from '@/queries/server/user-options'

export const metadata: Metadata = {
	title: 'Users',
}

const HomePage = async () => {
	const queryClient = getQueryClient()

	await queryClient.prefetchQuery(usersQueryOptions())

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div>
				<h1 className='mb-4 capitalize text-4xl font-bold'>server side data fetching example</h1>
				<UserList />
			</div>
		</HydrationBoundary>
	)
}

export default HomePage
