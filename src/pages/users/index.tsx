/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from 'common/components/nav/Nav'
import * as api from 'modules/users/queries/users'

const Index: React.FC = ({ data }: any) => {

  return (
    <div className={'container'}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <Nav />
      {data.map((user: any) => (
        <div className='flex items-center p-2'>
          <p>{user.name}</p>
          <Link href={`/users/${user.id}`}>
            <a className='p-2 border ml-3'>view</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await api.getUsers(2)
  return { props: { data: res }, revalidate: 10 }
}

export default Index
