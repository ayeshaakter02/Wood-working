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
  // {
  //   path: "/signup",
  //   Component: Signup,
  // },
  // {
  //   path: "*",
  //   Component: Not_found,
  // }
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