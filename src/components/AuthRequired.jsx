import { Outlet, Navigate } from 'react-router-dom';

const AuthRequired = () => {
  const authenticated = false;
  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AuthRequired;
