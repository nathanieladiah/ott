import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../../hooks/useAuthStatus";

import PropTypes from "prop-types";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <p>Loading...</p>;
  }

  if (!loggedIn) {
    return <Navigate to="/sign-in" />;
  }

  //   return children ? children : <Outlet />;
  return <Outlet />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
