import React from "react";
import "./Video.css";
import { videoData } from "../../Data/videoData";
import Playbutton from "../Playbutton/Playbutton";
const Video = () => {
  return (
    <>
      <div onClick={()=>console.log("Hello parent app")}>
        <div className="container">
          {videoData.map((allVideos, index) => (
            <div className="video-container" key={index}>
              <img src="/pic1.webp" alt={allVideos.title} />
              <div className="video-content">
                <div>Title : {allVideos.title}</div>
                <div>Channel : {allVideos.channel}</div>
                <div>Time : {allVideos.time}</div>
                <div>Verified : {allVideos.verified ? "✅" : "❌"}</div>
                <div>Views : {allVideos.views}</div>
              </div>
              <Playbutton
                onplay={() => console.log("Play", allVideos.title)}
                onpause={() => console.log("Pause", allVideos.title)}
              >
                {allVideos.title}
              </Playbutton>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
