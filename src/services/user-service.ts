import { api } from '@/lib/api'
import { IUser } from '@/types/user'

export const fetchUsers = async (): Promise<IUser[]> => {
	const response = await api.get('/users')
	return response.data
}

export const fetchUserById = async (id: string): Promise<IUser> => {
	const response = await api.get(`/users/${id}`)
	return response.data
}
