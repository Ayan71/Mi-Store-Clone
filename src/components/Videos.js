import React from "react";
import VideoCard from "./VideoCard";
import "../styles/Videos.css";

const Videos = ({ vidoes }) => {
  return (
    <div className="Videos">
      {vidoes.map((item, index) => (
        <VideoCard
          index={index}
          key={item.image}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Videos;
