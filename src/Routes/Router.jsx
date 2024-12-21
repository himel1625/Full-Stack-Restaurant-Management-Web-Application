import { createBrowserRouter } from 'react-router-dom';

import Layouts from '../Layouts/Layouts';
import Login from '../Pages/Authentication/Login/Login';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';

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
    ],
  },
]);

export default router;
