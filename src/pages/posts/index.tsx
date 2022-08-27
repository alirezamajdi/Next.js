import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import * as api from 'modules/posts/queries/api'
import { queryKeys } from 'react-query/constants'

const Index = () => {
  // const { data } = useQuery([queryKeys.posts, 1], () => api.getPosts(1), {
  //   keepPreviousData: true,
  // })
  const fetch = async () => {
    const res = await api.getPosts(1)
    console.log('ccc', res)
  }
  useEffect(() => {
    fetch()
  }, [])

  return <div></div>
}

export default Index
