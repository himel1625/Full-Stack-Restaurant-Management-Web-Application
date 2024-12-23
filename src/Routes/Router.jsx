import { createBrowserRouter } from 'react-router-dom';

import Map from '../Components/Map/Map';
import Layouts from '../Layouts/Layouts';
import AddFood from '../Pages/AddFood/AddFood';
import AllFoods from '../Pages/AllFoods/AllFoods';
import Login from '../Pages/Authentication/Login/Login';
import Register from '../Pages/Authentication/Register/Register';
import Error from '../Pages/Error/Error';
import FoodDetails from '../Pages/FoodDetails/FoodDetails';
import Gallery from '../Pages/Gallery/Gallery';
import Home from '../Pages/Home/Home';
import MyFood from '../Pages/MyFoods/MyFood';
import MyOrders from '../Pages/MyOrders/MyOrders';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Location',
        element: <Map />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Register',
        element: <Register />,
      },
      {
        path: '/AddFood',
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: '/Gallery',
        element: <Gallery />,
      },
      {
        path: '/AllFoods',
        element: <AllFoods />,
      },
      {
        path: '/FoodDetails/:id',
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/MyFood',
        element: (
          <PrivateRoute>
            <MyFood />
          </PrivateRoute>
        ),
      },
      {
        path: '/MyOrders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
