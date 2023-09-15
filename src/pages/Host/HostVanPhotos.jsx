import { useOutletContext } from 'react-router-dom';

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="host-van-photo">
      <img src={currentVan.imageUrl} alt={currentVan.name} />
    </div>
  );
};

export default HostVanPhotos;
