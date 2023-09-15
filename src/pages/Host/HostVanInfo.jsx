import { useOutletContext } from 'react-router-dom';

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="van-info">
      <p>
        Name:
        <span>{currentVan.name}</span>
      </p>
      <p>
        Category:
        <span className="van-info-type">{currentVan.type}</span>
      </p>
      <p>
        Description:
        <span>{currentVan.description}</span>
      </p>
      <p>
        Visibility:
        <span>Public</span>
      </p>
    </div>
  );
};

export default HostVanInfo;
