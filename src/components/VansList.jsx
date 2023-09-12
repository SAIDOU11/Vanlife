import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VansList = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const elementsVansList = vans.map((van) => {
    return (
      <div key={van.id} className="van-item">
        <Link id={van.id} to={`/vans/${van.id} `}>
          <div className="van-img">
            <img src={van.imageUrl} />
          </div>
          <div className="name-price">
            <p className="name">{van.name}</p>
            <p className="price">
              ${van.price} <br /> <span className="day-price">/day</span>{' '}
            </p>
          </div>
          <div className="link-type">
            <i className={`link-option ${van.type} `}>{van.type}</i>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="vans-list">
      <h1>Explore our van options</h1>
      {elementsVansList}
    </div>
  );
};

export default VansList;
