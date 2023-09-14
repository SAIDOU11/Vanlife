import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <>
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
      </div>
    </>
  );
};

export default HostVanDetail;
