import React, { useState } from 'react'
import {
  useQuery,
  dehydrate,
  useQueryClient,
  useMutation,
  UseMutateFunction,
  
} from 'react-query'
import * as api from 'modules/users/queries/users'
import { queryKeys } from 'react-query/constants'
import { useCustomToast } from '../../../common/hooks/useCustomToast'

export const useUsers = () => {
  const [page, setPage] = useState<number>(1)
  const { data } = useQuery([queryKeys.users, page], () => api.getUsers(page), {
    keepPreviousData: true,
  })
  return { data, page, setPage }
}

export const useEditUser = (): {
  mutate: UseMutateFunction<any, unknown, User, unknown>
  isError: boolean
  isSuccess:boolean
} => {
  const toast = useCustomToast()
  const queryClient = useQueryClient()

  // TODO: replace with mutate function
  const { mutate, isError, isSuccess } = useMutation(
    (updatedUser: User) => api.updateUser(updatedUser),
    {
      onError: () => {
        toast({
          title: 'Update Failed; resotring previous values',
          status: 'warning',
        })
      },
      onSuccess: (updatedUser: User) => {
        let catchData: User[] | undefined = queryClient.getQueryData([
          queryKeys.users,
          1,
        ])
        let indexUpdated = catchData?.findIndex(
          (item) => item.id === updatedUser.id
        )

        if (catchData && indexUpdated != undefined) {
          catchData[indexUpdated] = { ...updatedUser }
        }

        queryClient.setQueryData([queryKeys.users, 1], catchData)
        toast({
          title: 'You have edit user',
          status: 'success',
        })
      },
    }
  )
  return { mutate, isError, isSuccess }
}
