import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div>
        <h1>Adopt Me!</h1>
      </div>
      <Outlet />
    </>
  )
}

export default App
