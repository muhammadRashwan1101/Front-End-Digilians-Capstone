import { RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import { Router } from './router/Router'
import AuthProvider from './context/AuthProvider'

function App() {


  return (
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
  )
}

export default App
