import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHostVans } from '../../Api.jsx';

const HostVans = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const loadVans = async () => {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadVans();
  }, [id]);

  const vanListed = vans.map((van) => {
    return (
      <Link key={van.id} className="host-van-link" to={van.id}>
        {' '}
        <div key={van.id} className="host-van-item">
          <div className="host-van-img">
            <img src={van.imageUrl} alt={van.name} />
          </div>
          <div className="host-name-price">
            <p className="host-name">{van.name}</p>
            <p className="host-price">${van.price}/day</p>
          </div>
        </div>{' '}
      </Link>
    );
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <h1 className="heading-list">Your listed vans </h1>
      <div className="listVans">
        {vans.length > 0 ? <section>{vanListed}</section> : <h2>Loading...</h2>}
      </div>
    </>
  );
};

export default HostVans;
