import { Link, Outlet } from 'react-router-dom'
import AdoptedPetProvider from './contexts/AdoptedPetProvider'

const App = () => {
  return (
    <>
      <AdoptedPetProvider>
        <header>
          <Link href={'/'}>Adopt Me!</Link>
        </header>
        <Outlet />
      </AdoptedPetProvider>
    </>
  )
}

export default App
