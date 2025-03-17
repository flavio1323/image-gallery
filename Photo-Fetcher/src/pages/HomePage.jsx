import React, { useEffect, useState } from "react";
import Controls from "../components/UI/Controls";
import ImageContainer from "../components/UI/ImageContainer";
import MainLayout from "../layouts/MainLayout";
import { fetchPhotos } from "../services/api";

const HomePage = () => {
    const [photos, setPhotos] = useState([]);
    const [isGrayscale, setIsGrayscale] = useState(false);
    const [page, setPage] = useState(1);

    const getPhotos = async (pageNumber = 1) => {
        const fetchedPhotos = await fetchPhotos();
        if (pageNumber === 1) {
            setPhotos(fetchedPhotos);
        } else {
            setPhotos((prevPhotos) => [...prevPhotos, ...fetchedPhotos]);
        }
    };

    const handleToggleGrayscale = (checked) => {
        setIsGrayscale(checked);
    };

    const handleFetchNewPhotos = () => {
        getPhotos(1);
    };

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        getPhotos(nextPage);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <MainLayout onLoadMore={handleLoadMore}>
            <Controls
                onToggleGrayscale={handleToggleGrayscale}
                onFetchNewPhotos={handleFetchNewPhotos}
            />
            <div className="image-grid">
                {photos.map((image) => (
                    <ImageContainer
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        isGrayscale={isGrayscale}
                    />
                ))}
            </div>
        </MainLayout>
    );
};

export default HomePage;