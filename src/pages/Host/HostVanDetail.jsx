import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import HostVanLayout from '../../components/HostVanLayout.jsx';

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setCurrentVan(data.vans);
      });
  }, []);

  if (!currentVan) {
    return;
  }

  return (
    <section>
      <Link className="back-to-vans" to=".." relative="path">
        <AiOutlineArrowLeft /> <span>Back to all vans</span>
      </Link>
      <div className="van-detail">
        <div className="detail-picture-name">
          <div className="picture">
            <img src={currentVan.imageUrl} alt="" />
          </div>
          <div className="detail-name">
            <i className={`link-option ${currentVan.type} `}>
              {currentVan.type}
            </i>
            <h4>{currentVan.name}</h4>
            <p className="current-name-price">
              ${currentVan.price}
              <span>/day</span>{' '}
            </p>
          </div>
        </div>
        <Outlet />
        <HostVanLayout />
      </div>
    </section>
  );
};

export default HostVanDetail;
