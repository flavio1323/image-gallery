import React from "react";

const Controls = () => {
  return (
    <div className="controls">
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" className="input" />
          <span className="slider round"></span>
        </label>
        <span className="switch-label">Make Photo Grayscale</span>
      </div>
      <button className="newPhotos" id="fetchNewPhotos">
        Fetch New Photos
      </button>
    </div>
  );
};

export default Controls;