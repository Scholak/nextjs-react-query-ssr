// Package Imports
import Link from 'next/link'

const UserDetailNotFount = () => {
	return (
		<div className='flex flex-col items-start gap-4'>
			<p className='text-4xl font-bold'>User Not Found</p>
			<Link
				href='/'
				className='py-2 px-4 rounded bg-sky-500 text-white shadow'
			>
				Return Back To User List
			</Link>
		</div>
	)
}

export default UserDetailNotFount
