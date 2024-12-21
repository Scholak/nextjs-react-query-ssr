// Package Imports
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

// Component Imports
import UserDetail from '@/components/user-detail'

// Utility Imports
import { getQueryClient } from '@/lib/queryClient'
import { userPostsQueryOptions } from '@/queries/server/post-options'
import { userDetailQueryOptions } from '@/queries/server/user-options'

type IParams = {
	params: Promise<{
		id: string
	}>
}

export const generateMetadata = async ({ params }: IParams): Promise<Metadata> => {
	try {
		const { id } = await params

		const queryClient = getQueryClient()

		const userDetail = await queryClient.fetchQuery(userDetailQueryOptions(id))

		return {
			title: userDetail.username,
		}
	} catch (error: any) {
		if (error.status === 404) return notFound()

		throw new Error(error)
	}
}

const UserDetailPage = async ({ params }: IParams) => {
	const queryClient = getQueryClient()

	try {
		const { id } = await params

		await Promise.all([
			queryClient.prefetchQuery(userDetailQueryOptions(id)),
			queryClient.prefetchQuery(userPostsQueryOptions(id)),
		])
	} catch (error: any) {
		if (error.status === 404) return notFound()

		throw new Error(error)
	}

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<UserDetail />
		</HydrationBoundary>
	)
}

export default UserDetailPage
