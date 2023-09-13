import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const styleCurrentNav = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <header>
        <div className="navigation">
          <div className="nav-title">
            <Link to="/">
              <h1>#VANLIFE</h1>
            </Link>
          </div>
          <div className="nav-links">
            <NavLink
              to="/host"
              style={({ isActive }) => (isActive ? styleCurrentNav : null)}
            >
              Host
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? styleCurrentNav : null)}
            >
              About
            </NavLink>
            <NavLink
              to="/vans"
              style={({ isActive }) => (isActive ? styleCurrentNav : null)}
            >
              Vans
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
