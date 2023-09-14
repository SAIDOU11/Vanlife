import { useOutletContext } from 'react-router-dom';
const HostVanInfo = () => {
  const { currentVan } = useOutletContext();

  return (
    <>
      <p className="van-info">
        <span>Name:</span> {currentVan.name}
      </p>
      <p className="van-info van-info-type">
        <span>Category:</span> {currentVan.type}
      </p>
      <p className="van-info">
        <span>Description:</span> {currentVan.description}
      </p>
      <p className="van-info">
        <span>Visibility:</span> Public
      </p>
    </>
  );
};

export default HostVanInfo;
