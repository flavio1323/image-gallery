import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="container">
            <h1 className="title">Photo Fetcher</h1>
            {children}
            <button className="loadMore" id="loadMore">
                More Photos
            </button>
        </div>
    );
};

export default MainLayout;
