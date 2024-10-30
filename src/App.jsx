import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './views/HomePage'
import HiddenMessage from './components/HiddenMessage'

function App() {
  const [activeSection, setActivesection] = useState('')
  // SETTING UP THE ROUTER
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout activeSection={activeSection} setActiveSection={setActivesection}/>}>
         <Route index element={<HomePage />}/>
      </Route>
    )
  )
  return (
    <>
      <div className='relative'>
        <RouterProvider router={router} />
        <div className={`top-24 fixed right-0`}>
         <HiddenMessage isRight/>
        </div>
        <div className={`bottom-24 fixed left-0`}>
         <HiddenMessage/>
        </div>
      </div>
    </>
  )
}

export default App
