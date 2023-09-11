import { Link } from 'react-router-dom';

const HomeMenu = () => {
  return (
    <div className="home-menu">
      <div className="menu-title">
        <h1>You got the travel plans, we got the travel vans.</h1>
      </div>
      <div className="menu-find">
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="link link-lg">
          Find your van
        </Link>
      </div>
    </div>
  );
};

export default HomeMenu;
