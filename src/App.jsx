import { createRoot } from 'react-dom/client'
import Pet from './components/Pet'
import SearchParams from './components/SeachParams'
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      <div>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        <Pet name="Doink" animal="Cat" breed="Mixed" />
      </div>
    </div>
  )
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
