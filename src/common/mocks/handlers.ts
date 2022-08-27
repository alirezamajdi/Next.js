import { rest } from 'msw'
import { baseApiUrl } from 'common/utils/constants'
import { posts } from './data/posts'

export const handlers = [
  rest.get(baseApiUrl + 'posts', (req, res, ctx) => {
    return res(ctx.json(posts))
  }),
]

