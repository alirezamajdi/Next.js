/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import * as api from 'modules/users/queries/users'

const Index = ({ data }: any) => {
  return (
    <div className={'container'}>
      <Head>
        <title>User List</title>
      </Head>
      <ul>
        {data?.map((user: User) => (
          <li key={user.id} className=' cursor-pointer py-2'>
            <Link href={'/usersWithSSG/' + user.id}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await api.getUsers(2)
  return { props: { data: res }, revalidate: 10 }
}

export default Index
