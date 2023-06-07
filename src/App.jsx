import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <header>
        <Link href={'/'}>Adopt Me!</Link>
      </header>
      <Outlet />
    </>
  )
}

export default App
