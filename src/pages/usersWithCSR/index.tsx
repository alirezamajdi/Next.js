/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useUsers } from 'modules/users/hooks/useUser'

const Index: React.FC = () => {
  const { data } = useUsers()

  return (
    <div className={'container'}>
      <Head>
        <title>User List</title>
      </Head>
      <ul>
        {data?.map((user: User) => (
          <li key={user.id} className=' cursor-pointer py-2'>
            <Link href={'/usersWithCSR/' + user.id}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Index
