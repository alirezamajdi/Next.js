interface User {
  company: any
  id: number
  email: string
  username: string
  name: string
  website: string
  phone: string
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}
