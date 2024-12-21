import { api } from '@/lib/api'
import { IPost } from '@/types/post'

export const fetchUserPosts = async (userId: string): Promise<IPost[]> => {
	const response = await api.get('/posts')
	return response.data.filter((post: IPost) => post.userId === Number(userId))
}
