import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import NotFound from "../Pages/Notfound";
import Login from "../Pages/Login";
import BrowseCars from "../Pages/BrowseCars";
import AddCar from "../Pages/AddCar";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/browsecars",
        element: <BrowseCars></BrowseCars>,
        loader: ()=> fetch('http://localhost:3000/all_cars')
      },
      {
        path:"/add-car",
        element:<AddCar></AddCar>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);