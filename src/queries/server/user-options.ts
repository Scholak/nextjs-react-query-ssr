import { fetchUserById, fetchUsers } from '@/services/user-service'
import { queryOptions } from '@tanstack/react-query'

export const usersQueryOptions = () => {
	return queryOptions({
		queryKey: ['users'],
		queryFn: fetchUsers,
	})
}

export const userDetailQueryOptions = (id: string) => {
	return queryOptions({
		queryKey: ['user', id],
		queryFn: () => fetchUserById(id),
	})
}
