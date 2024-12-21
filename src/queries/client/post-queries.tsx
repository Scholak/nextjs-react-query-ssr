'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchUserPosts } from '@/services/post-service'

// User Posts List Query
export const useUserPostsQuery = (userId: string) => {
	const userPostsQuery = useSuspenseQuery({
		queryKey: ['user', 'posts', userId],
		queryFn: () => fetchUserPosts(userId),
	})

	return { ...userPostsQuery, userPosts: userPostsQuery.data }
}
