/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/Spinner/LoadingSpinner';
import useAuth from '../Hooks/useAuth';
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingSpinner />;
  if (user) return children;
  return <Navigate to='/Login' state={location.pathname} />;
  // return <Navigate to='/Login' state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;
