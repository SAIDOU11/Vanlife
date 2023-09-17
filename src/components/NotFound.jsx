import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link className="return link luxury link-lg">Return to home</Link>
    </div>
  );
};

export default NotFound;
