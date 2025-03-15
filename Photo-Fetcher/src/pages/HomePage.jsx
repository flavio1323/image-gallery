import React from "react";
import Controls from "../components/UI/Controls";
import ImageContainer from "../components/UI/ImageContainer";
import MainLayout from "../layouts/MainLayout";
import dummyData from "../store/dummyData";

const HomePage = () => {
    return (
        <MainLayout>
            <Controls />
            <div className="image-grid">
                {dummyData.map((image) => (
                    <ImageContainer key={image.id} src={image.src} alt={image.alt} />
                ))}
            </div>
        </MainLayout>
    );
};

export default HomePage;