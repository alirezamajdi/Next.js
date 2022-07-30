import { api } from '../../../common/queries/config'

export const getUsers = (page: number) =>
  api.get(`/users?page=${page}`).then((res) => res.data)

export const getUser = (id: string) =>
  api.get(`/users/${id}`).then((res) => res.data)

export const updateUser = (data: User) =>
  api.put(`/users/${data.id}`, data).then((res) => res.data)
