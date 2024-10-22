import './index.scss'
import { Outlet } from 'react-router-dom'
import Header from './layout/header'
import Footter from './layout/footer'

function App() {
  return (
    <>
      <div className='app-ai'>
        <Header />
        <Outlet />
        <Footter />
      </div>
    </>
  )
}

export default App
