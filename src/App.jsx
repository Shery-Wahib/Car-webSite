import React from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Componants/Home/Home'
import Cars from './Componants/Cars/Cars'
import HomeLayOut from './Componants/HomeLayOut/HomeLayOut'
import CarDetails from './Componants/CarDetails/CarDetails'

function App() {
  const routs = createBrowserRouter([
    {
      path: '',
      element: <HomeLayOut />,
      // errorElement: <NotFound />, 
      children: [
        {index: true, element: <Home />},
        {path: "home", element: <Home />},
        {path: '/cars', element: <Cars />},
        {path: '/carDetails/:id', element: <CarDetails />},
      ],
    }, {
      
    }
  ])
  return (

    <>

      <RouterProvider router={routs}></RouterProvider>
    </>
  )
}

export default App
