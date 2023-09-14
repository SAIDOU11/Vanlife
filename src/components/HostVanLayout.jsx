import { NavLink } from 'react-router-dom';

const HostVanLayout = () => {
  return (
    <div className="van-layout">
      <NavLink to=".">Details</NavLink>
      <NavLink to="pricing">Pricing</NavLink>
      <NavLink to="photos">Photos</NavLink>
    </div>
  );
};

export default HostVanLayout;
