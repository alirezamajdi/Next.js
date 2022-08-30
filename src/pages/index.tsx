/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import { throttle } from 'lodash'

const Home = () => {
  //throttled
  const [value, setValue] = useState('')
  const throttled = useCallback(
    throttle((newValue) => console.log(newValue), 1000),
    []
  )
  useEffect(() => throttled(value), [value])

  return (
    <div className='container'>
      <Head>
        <title>Nextjs</title>
      </Head>
      <h2>Hello Next js</h2>
    </div>
  )
}
export default Home
