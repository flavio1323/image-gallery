import React from "react";
import LoadMoreButton from "../components/LoadMoreButton";

const MainLayout = ({ children, onLoadMore }) => {
    return (
        <div className="container">
            <h1 className="title">Photo Fetcher</h1>
            {children}
            <LoadMoreButton onLoadMore={onLoadMore} />
        </div>
    );
};

export default MainLayout;