import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { GetHostVans } from '../Api.jsx';

const VansList = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const typeFilter = searchParams.get('type');

  useEffect(() => {
    const loadVans = async () => {
      setLoading(true);
      try {
        const data = await GetHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadVans();
  }, [id]);

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>There is an error: {error.message} ...</h1>;
  }

  const elementsVansList = displayVans.map((van) => {
    return (
      <div key={van.id} className="van-item">
        <Link
          to={van.id}
          state={{ params: searchParams.toString(), type: typeFilter }}
        >
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
