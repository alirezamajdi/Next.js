import { render, screen, cleanup } from '@testing-library/react'
import Greetings from './Greetings'
import '@testing-library/jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

afterEach(cleanup)
describe('when rendered with a `name` prop', () => {
  it('should paste it into the greetings text', () => {
    render(<Greetings name='Test Name' />)
    expect(screen.getByText(/Hello Test Name!/)).toBeInTheDocument()
  })
})
