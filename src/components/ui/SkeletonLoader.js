import React from 'react';

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="dashboard-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card skeleton">
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
