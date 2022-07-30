import ReactLoading from 'react-loading'
import { ReactElement } from 'react'
import { useIsFetching, useIsMutating } from 'react-query'

export function Loading(): ReactElement {
  // will use React Query `useIsFetching` to determine whether or not to display
  const isFetching = useIsFetching() // for now, just don't display
  const isMutating = useIsMutating()

  const display = isFetching | isMutating ? 'inherit' : 'hidden'

  return (
    <div
      className={`h-[100vh] flex items-center justify-center ${display} absolute left-0 right-0`}
    >
      <ReactLoading type='spinningBubbles' color='#222' />
    </div>
  )
}
