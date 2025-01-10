import { createBrowserRouter } from 'react-router-dom';

import Map from '../Components/Map/Map';
import Layouts from '../Layouts/Layouts';
import AddFood from '../Pages/AddFood/AddFood';
import AllFoods from '../Pages/AllFoods/AllFoods';
import Login from '../Pages/Authentication/Login/Login';
import Register from '../Pages/Authentication/Register/Register';
import Error from '../Pages/Error/Error';
import FoodDetails from '../Pages/FoodDetails/FoodDetails';
import FoodPurchase from '../Pages/FoodPurchase/FoodPurchase';
import Gallery from '../Pages/Gallery/Gallery';
import Home from '../Pages/Home/Home';
import MyFood from '../Pages/MyFoods/MyFood';
import MyOrders from '../Pages/MyOrders/MyOrders';
import Reservation from '../Pages/Reservation/Reservation';
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
        path: '/location',
        element: <Map />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/addFood',
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/allFoods',
        element: <AllFoods />,
      },
      {
        path: '/foodDetails/:id',
        element: <FoodDetails />,
      },
      {
        path: '/myFood',
        element: (
          <PrivateRoute>
            <MyFood />
          </PrivateRoute>
        ),
      },
      {
        path: '/myOrders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: '/foodPurchase/:id',
        element: (
          <PrivateRoute>
            <FoodPurchase />
          </PrivateRoute>
        ),
      },
      {
        path: 'reservation',
        element: <Reservation />,
      },
    ],
  },
]);

export default router;
