import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const VansList = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get('type');

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const elementsVansList = displayVans.map((van) => {
    return (
      <div key={van.id} className="van-item">
        <Link to={van.id}>
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

  const handleClickFilter = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <>
      <h1>Explore our van options</h1>
      <div className="van-type-filter">
        <button
          onClick={() => handleClickFilter('type', 'simple')}
          className={
            typeFilter === 'simple'
              ? `simple link-option`
              : `type-simple type-link type link-option`
          }
        >
          Simple
        </button>
        <button
          onClick={() => handleClickFilter('type', 'luxury')}
          className={
            typeFilter === 'luxury'
              ? 'luxury link-option'
              : 'type-luxury type-link type link-option'
          }
        >
          Luxury
        </button>
        <button
          onClick={() => handleClickFilter('type', 'rugged')}
          className={
            typeFilter === 'rugged'
              ? 'rugged link-option'
              : 'type-rugged type-link type link-option'
          }
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleClickFilter('type', null)}
            className="clear type-link"
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="vans-list"> {elementsVansList}</div>
    </>
  );
};

export default VansList;
