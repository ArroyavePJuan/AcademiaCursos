import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Cursos from './components/Cursos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h2>Error 404 not found</h2>
  },
  {
    path: '/cursos',
    element: <Cursos />,
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
