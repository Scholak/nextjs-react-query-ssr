'use client'

// Package Imports
import Link from 'next/link'

// Utility Imports
import { useUsersQuery } from '@/queries/client/user-queries'

const UserList = () => {
	const { users } = useUsersQuery()

	return (
		<div className='flex flex-col gap-4'>
			{users.map(user => (
				<Link
					href={`/users/${user.id}`}
					key={user.id}
					className='p-4 border flex flex-col gap-2 bg-gray-100 rounded shadow'
				>
					<p className='capitalize text-xl font-medium'>{user.name}</p>
					<p className='capitalize text-xl font-medium'>Username: {user.username}</p>
					<p className='capitalize text-xl font-medium'>Phone: {user.phone}</p>
					<p className='capitalize'>Email: {user.email}</p>
				</Link>
			))}
		</div>
	)
}

export default UserList
