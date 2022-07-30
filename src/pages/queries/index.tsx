/* eslint-disable @next/next/no-img-element */
import React, {  useState } from 'react'
import Link from 'next/link'
import EditUser from 'modules/users/components/EditUser'
import { useUsers } from 'modules/users/hooks/useUser'

const Index: React.FC = () => {
  const [user, setUser] = useState<User | null>(null)
  const { data } = useUsers()

  return (
    <div className={'container'}>
      <ul>
        {data?.map((user: any) => (
          <li
            key={user.id}
            onClick={() => setUser(user)}
            className=' cursor-pointer py-2'
          >
            {user.username}
          </li>
        ))}
      </ul>
      {user && <EditUser user={user} />}
    </div>
  )
}

export default Index
