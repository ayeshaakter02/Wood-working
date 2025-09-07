import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import Furniture from "./pages/Furniture";
import Figurines from "./pages/Figurines";
import Decorations from "./pages/Decorations";
import Relief from "./pages/Relief";
import Architectural from "./pages/Architectural";
import Work from "./components/Work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/furniture",
    element: <Furniture />,
  },
  {
    path: "/figurines",
    element: <Figurines />,
  },
  {
    path: "/decorations",
    element: <Decorations />,
  },
  {
    path: "/relief",
    element: <Relief />,
  },
  {
    path: "/architectural",
    element: <Architectural />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
