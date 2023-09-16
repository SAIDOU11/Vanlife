import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CurrentVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setVan(data.vans);
      });
  }, [params.id]);

  return (
    <>
      <Link className="back-to-vans" to=".." relative="path">
        <AiOutlineArrowLeft /> <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="current-van">
          <img className="current-img" src={van.imageUrl} alt="" />
          <i className={`link-option ${van.type}`}>{van.type}</i>
          <h2>{van.name}</h2>
          <h3>
            ${van.price}
            <span className="current-price">/day</span>
          </h3>
          <p className="current-description">{van.description} </p>
          <Link className=" link link-lg">Rent your van</Link>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default CurrentVanDetail;
