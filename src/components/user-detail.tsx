'use client'

// Package Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Utility Imports
import { useUserPostsQuery } from '@/queries/client/post-queries'
import { useUserDetailQuery } from '@/queries/client/user-queries'

type IParams = {
	id: string
}

const UserDetail = () => {
	const params = useParams<IParams>()

	const { user } = useUserDetailQuery(params.id)
	const { userPosts } = useUserPostsQuery(params.id)

	return (
		<div className='flex flex-col gap-8'>
			<Link
				href='/'
				className='text-lg text-sky-500 underline'
			>
				User List
			</Link>
			<div className='flex flex-col gap-4'>
				<h1 className='capitalize text-2xl font-bold'>{user.name}</h1>
				<p className='capitalize text-xl font-medium'>Username: {user.username}</p>
				<p className='capitalize text-xl font-medium'>Phone: {user.phone}</p>
				<p className='capitalize'>Email: {user.email}</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='capitalize text-2xl font-bold'>User Posts</h2>
				{userPosts.map(post => (
					<div
						key={post.id}
						className='p-4 border flex flex-col gap-2 bg-gray-100 rounded shadow'
					>
						<p className='capitalize text-xl font-medium'>{post.title}</p>
						<p>{post.body}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default UserDetail
