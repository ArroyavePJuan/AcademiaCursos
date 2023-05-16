import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h2>Error 404 not found</h2>
  }
])

function App() {

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
