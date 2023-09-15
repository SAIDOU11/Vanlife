import React from 'react';
import { Link } from 'react-router-dom';

const VanTypeFilter = () => {
  return (
    <div className="van-type-filter">
      <Link to="" className="type link-option">
        Simple
      </Link>
      <Link to="" className="type link-option">
        Luxury
      </Link>
      <Link to="" className="type link-option">
        Rugged
      </Link>
      <Link className="clear" to=".">
        Clear filters
      </Link>
    </div>
  );
};

export default VanTypeFilter;
