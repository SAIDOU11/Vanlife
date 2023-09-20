import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import HostVanLayout from '../../components/HostVanLayout.jsx';
import { getHostVans } from '../../Api.jsx';

const HostVanDetail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadVans = async () => {
      setLoading(true);
      try {
        const data = await getHostVans(id);
        setCurrentVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadVans();
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
        <HostVanLayout />
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetail;
