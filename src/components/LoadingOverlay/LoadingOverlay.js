import React from 'react';
import './LoadingOverlay.css';

function LoadingOverlay({ isLoading }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-9999 ${
        isLoading ? 'block' : 'hidden'
      }`}
    >
      <div className="loading-spinner"></div>
    </div>
  );
}

export default LoadingOverlay;