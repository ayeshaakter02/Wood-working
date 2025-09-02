import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home';

const router =createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  
]);

const App = () => {
  return (
    <div>
      <>
    <RouterProvider router={router} />
    </>
    </div>
  )
}

export default App