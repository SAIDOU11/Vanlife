import { Link } from 'react-router-dom';

const NavMainRoute = () => {
  return (
    <>
      <nav>
        <div className="navigation">
          <div className="nav-title">
            <h1>#VANLIFE</h1>
          </div>
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMainRoute;
