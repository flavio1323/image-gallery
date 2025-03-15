// src/App.js
import React from "react";
import "./App.css";
import Controls from "./components/UI/Controls";
import ImageContainer from "./components/UI/ImageContainer";

function App() {
  const images = [
    { id: 1, src: "https://picsum.photos/200", alt: "Photo 1" },
    { id: 2, src: "https://picsum.photos/201", alt: "Photo 2" },
    { id: 3, src: "https://picsum.photos/202", alt: "Photo 3" },
    { id: 4, src: "https://picsum.photos/203", alt: "Photo 4" },
  ];

  return (
    <div className="container">
      <h1 className="title">Photo Fetcher</h1>
      <Controls />
      <div className="image-grid">
        {images.map((image) => (
          <ImageContainer key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
      <button className="loadMore" id="loadMore">
        More Photos
      </button>
    </div>
  );
}

export default App;