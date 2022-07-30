/* eslint-disable import/first */
import { ReactNode } from 'react'

import ThemeProvider from './theme-context'

const Index = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
export default Index
