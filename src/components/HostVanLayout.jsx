import { NavLink, Outlet } from 'react-router-dom';

const HostVanLayout = () => {
  const styleNavHost = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className="van-layout">
        <NavLink
          to="."
          style={({ isActive }) => (isActive ? styleNavHost : null)}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? styleNavHost : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          style={({ isActive }) => (isActive ? styleNavHost : null)}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostVanLayout;
