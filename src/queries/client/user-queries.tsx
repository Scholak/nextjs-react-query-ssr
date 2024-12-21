'use client'

import { fetchUserById, fetchUsers } from '@/services/user-service'
import { useSuspenseQuery } from '@tanstack/react-query'

// User List Query
export const useUsersQuery = () => {
	const usersQuery = useSuspenseQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
	})

	return { ...usersQuery, users: usersQuery.data }
}

// User Detail Query
export const useUserDetailQuery = (id: string) => {
	const userQuery = useSuspenseQuery({
		queryKey: ['user', id],
		queryFn: () => fetchUserById(id),
	})

	return { ...userQuery, user: userQuery.data }
}
