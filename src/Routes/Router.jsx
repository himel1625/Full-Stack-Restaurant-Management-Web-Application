import { createBrowserRouter } from 'react-router-dom';

import Layouts from '../Layouts/Layouts';
import AddFood from '../Pages/AddFood/AddFood';
import Login from '../Pages/Authentication/Login/Login';
import Register from '../Pages/Authentication/Register/Register';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
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
    ],
  },
]);

export default router;
