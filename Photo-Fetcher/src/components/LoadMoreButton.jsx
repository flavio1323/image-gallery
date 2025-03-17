import React from "react";

const LoadMoreButton = ({ onLoadMore }) => {
    return (
        <button className="loadMore" id="loadMore" onClick={onLoadMore}>
            More Photos
        </button>
    );
};

export default LoadMoreButton;