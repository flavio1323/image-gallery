import React from "react";

const Controls = ({ onToggleGrayscale, onFetchNewPhotos }) => {
  return (
    <div className="controls">
      <div className="switch-container">
        <label className="switch">
          <input
            type="checkbox"
            className="input"
            onChange={(e) => onToggleGrayscale(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
        <span className="switch-label">Make Photo Grayscale</span>
      </div>
      <button className="newPhotos" id="fetchNewPhotos" onClick={onFetchNewPhotos}>
        Fetch New Photos
      </button>
    </div>
  );
};

export default Controls;