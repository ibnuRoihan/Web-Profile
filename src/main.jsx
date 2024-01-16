import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './app.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Layot & Page
import { RootLayout } from './layout/Root/Index'
import { Home } from './page/HomePage/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
