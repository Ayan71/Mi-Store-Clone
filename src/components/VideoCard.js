import React from "react";
import "../styles/VideoCard.css";

const VideoCard = ({ image, name, index }) => {
  return (
    <div className="VideoCard">
      <img src={image} alt={`${index} `} />
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
