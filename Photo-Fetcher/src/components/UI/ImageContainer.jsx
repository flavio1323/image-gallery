import React from "react";

const ImageContainer = ({ src, alt, isGrayscale }) => {
    return (
        <div className="image-container">
            <img
                src={src}
                alt={alt}
                style={{ filter: isGrayscale ? "grayscale(100%)" : "none" }}
            />
            <div className="overlay">
                <h2>Lukas Budimaier</h2>
                <a href="https://picsum.photos" target="_blank" rel="noopener noreferrer">
                    https://picsum.photos
                </a>
            </div>
        </div>
    );
};

export default ImageContainer;