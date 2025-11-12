import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import NotFound from "../Pages/Notfound";
import Login from "../Pages/Login";
import BrowseCars from "../Pages/BrowseCars";
import AddCar from "../Pages/AddCar";
import PrivateRoute from "./PrivateRoute";
import Cardetails from "../Pages/Cardetails";
import MyList from "../Pages/MyList";
import MyBooking from "../Pages/MyBooking";
import UpdateCar from "../Pages/UpdateCar";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:3000/FeaturedCars'),
      },
      {
        path:"/browsecars",
        element: <BrowseCars></BrowseCars>,
        loader: ()=> fetch('http://localhost:3000/all_cars')
      },
      {
        path:"/add-car",
        element:<PrivateRoute to="/login"><AddCar></AddCar></PrivateRoute>
      },
      {
        path:"/cardetails/:id",
        element:<PrivateRoute to="/login"> <Cardetails></Cardetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/all_cars/${params.id}`)

      },
      {
        path:"/update-car/:id",
        element:<PrivateRoute to="/login"><UpdateCar></UpdateCar></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/all_cars/${params.id}`)
      },
      {
        path: "/my-list",
        element: <PrivateRoute to="/login"><MyList /></PrivateRoute>,
      },
      {
        path: "/my-booking",
        element: <PrivateRoute to="/login"><MyBooking /></PrivateRoute>,
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