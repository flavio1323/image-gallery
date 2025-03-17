import React, { useEffect, useState } from "react";
import Controls from "../components/UI/Controls";
import ImageContainer from "../components/UI/ImageContainer";
import MainLayout from "../layouts/MainLayout";
import { fetchPhotos } from "../services/api";

const HomePage = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const getPhotos = async () => {
            const fetchedPhotos = await fetchPhotos();
            setPhotos(fetchedPhotos);
        };

        getPhotos();
    }, []);

    return (
        <MainLayout>
            <Controls />
            <div className="image-grid">
                {photos.map((image) => (
                    <ImageContainer key={image.id} src={image.src} alt={image.alt} />
                ))}
            </div>
        </MainLayout>
    );
};

export default HomePage;