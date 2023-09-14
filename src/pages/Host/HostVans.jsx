import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setVans(data.vans);
      });
  }, []);

  const vanListed = vans.map((van) => {
    console.log(van);
    return (
      <Link key={van.id} className="host-van-link" to={`/host/vans/${van.id}`}>
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

  return (
    <>
      <h1 className="heading-list">Your listed vans </h1>
      <div className="listVans">
        {vanListed.length > 0 ? (
          <section>{vanListed}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default HostVans;