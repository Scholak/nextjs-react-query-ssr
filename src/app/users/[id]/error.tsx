'use client'

// Package Imports
import Link from 'next/link'

const UserDetailErrorPage = () => {
	return (
		<div className='flex flex-col items-start gap-4'>
			<p className='text-4xl font-bold'>User Detail Error</p>
			<Link
				href='/'
				className='py-2 px-4 rounded bg-sky-500 text-white shadow'
			>
				Return Back To User List
			</Link>
		</div>
	)
}

export default UserDetailErrorPage
