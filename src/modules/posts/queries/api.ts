import axios from 'axios'
import { baseApiUrl } from 'common/utils/constants'

export const getPosts = (page: number): Promise<Post[]> =>
  axios.get(baseApiUrl + 'posts').then((res) => res.data)
