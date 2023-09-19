import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GetVans } from '../Api.jsx';

const CurrentVanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const loadVans = async () => {
      setLoading(true);
      try {
        const data = await GetVans(id);
        setVan(data.vans);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message} </h1>;
  }

  const params = location.state?.params || '';
  const type = location.state?.type || 'all';

  return (
    <>
      <Link className="back-to-vans" to={`../?${params}`} relative="path">
        <AiOutlineArrowLeft />{' '}
        <span>
          {location.state.type === null
            ? 'Back to all vans'
            : `Back to ${location.state.type} vans`}
        </span>
      </Link>
      {van && (
        <div className="current-van">
          <img className="current-img" src={van.imageUrl} alt={van.name} />
          <i className={`link-option ${van.type}`}>{van.type}</i>
          <h2>{van.name}</h2>
          <h3>
            ${van.price}
            <span className="current-price">/day</span>
          </h3>
          <p className="current-description">{van.description} </p>
          <button className=" link link-lg">Rent your van</button>
        </div>
      )}
    </>
  );
};

export default CurrentVanDetail;
