import React from 'react';
import { NavLink } from 'react-router-dom';

const HostVanLayout = () => {
  const styleNavHost = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <nav className="van-layout">
      <NavLink
        to="."
        end
        style={({ isActive }) => (isActive ? styleNavHost : null)}
      >
        Details
      </NavLink>
      <NavLink
        to="pricing"
        style={({ isActive }) => (isActive ? styleNavHost : null)}
      >
        Pricing
      </NavLink>
      <NavLink
        to="photos"
        style={({ isActive }) => (isActive ? styleNavHost : null)}
      >
        Photos
      </NavLink>
    </nav>
  );
};

export default HostVanLayout;
