import ActiveLink from './ActiveLink'

const Nav = () => (
  <nav>
    <ul className='flex'>
      <li className='p-5'>
        <ActiveLink activeClassName='active' href='/'>
          <a className='nav-link'>Home</a>
        </ActiveLink>
      </li>
      <li className='p-5'>
        <ActiveLink activeClassName='active' href='/usersWithCSR'>
          <a className='nav-link'>users with CSR</a>
        </ActiveLink>
      </li>
      <li className='p-5'>
        <ActiveLink activeClassName='active' href='/usersWithSSG'>
          <a className='nav-link'>users with SSG</a>
        </ActiveLink>
      </li>
      <li className='p-5'>
        <ActiveLink activeClassName='active' href='/[slug]' as='/posts'>
          <a className='nav-link'>posts</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
)

export default Nav
