import { fetchUserPosts } from '@/services/post-service'
import { queryOptions } from '@tanstack/react-query'

export const userPostsQueryOptions = (userId: string) => {
	return queryOptions({
		queryKey: ['user', 'posts', userId],
		queryFn: () => fetchUserPosts(userId),
	})
}
