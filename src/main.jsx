import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import SearchParams from './components/SeachParams'
import Details from './pages/Details'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/query-client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchParams />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
])

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <div>
      <h1>Adopt Me!</h1>
    </div>
    <RouterProvider router={router} />,
  </QueryClientProvider>,
)
