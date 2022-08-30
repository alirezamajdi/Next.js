import React from 'react'
import { useState } from 'react'
import * as api from 'modules/users/queries/users'

function UserDetail({ user }: any) {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? 'cancel' : 'edit'}
      </button>
      {isEdit ? (
        <p>form</p>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.username}</p>
        </>
      )}
    </div>
  )
}

export async function getStaticPaths() {
  const resp = await api.getUsers(1)
  return {
    paths: resp.map((user: any) => ({
      params: { userId: user.id.toString() },
    })),
    fallback: false,
  }
}
export async function getStaticProps({
  params,
}: {
  params: { userId: string }
}) {
  const user = await api.getUser(params.userId)
  return { props: { user }, revalidate: 10 }
}
export default UserDetail
