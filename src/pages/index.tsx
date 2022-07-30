/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Nav from 'common/components/nav/Nav'
import { useThemeContext } from 'common/context/theme-context'
import { throttle } from 'lodash'
import Button from 'common/components/UI/button/Button'

const Home: React.FC = () => {
  //context
  const themeCtx = useThemeContext()
  const changeTheme = () => {
    themeCtx?.toggleTheme()
  }
  //throttled
  const [value, setValue] = useState('')
  const throttled = useCallback(
    throttle((newValue) => console.log(newValue), 1000),
    []
  )
  useEffect(() => throttled(value), [value])

  return (
    <div className={'container'}>
      <Head>
        <title>Apllone</title>
      </Head>
      <Nav />
      <div className='grid grid-cols-2'></div>

      <div className='pt-5'>
        <button onClick={changeTheme}>setTheme</button>
        <p>theme is {themeCtx?.theme} mode</p>
      </div>
      <input className='border' onChange={(e) => setValue(e.target.value)} />
      <Button label='button' icon='listing' />
    </div>
  )
}
export default Home
