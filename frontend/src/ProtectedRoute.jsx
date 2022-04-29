import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function ProtectedRoute({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [userLoggedIn, setUserLoggedIn] = React.useState(
    localStorage.getItem("userToken")
  );
  if (!userLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  /* user: PropTypes.bool, */
  children: PropTypes.shape(),
};
ProtectedRoute.defaultProps = {
  /* user: true, */
  children: "",
};

export default ProtectedRoute;
