import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from './error-page'
import Contact from '../pages/contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contact/:id',
        element: <Contact />
      }
    ]
  }
])
