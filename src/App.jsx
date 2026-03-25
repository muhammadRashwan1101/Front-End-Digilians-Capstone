import { RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import { Router } from './router/Router'

function App() {


  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
