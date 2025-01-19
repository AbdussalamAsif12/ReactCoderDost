import React, { useState } from "react";
import "./Video.css";
import { videoData } from "../../Data/videoData";
import Playbutton from "../Playbutton/Playbutton";
const Video = () => {
  const [addVideo, setAddVideos] = useState(videoData);
  function newVideo() {
    setAddVideos([
      ...addVideo,
      {
        title: "State Management in React",
        time: "1 Year Ago",
        views: "300k",
        channel: "Frontend Mentor",
        verified: true,
      },
    ]);
  }
  return (
    <>
      <div>
        <button onClick={newVideo}>Add Video</button>
        <div className="container">
          {addVideo.map((allVideos, index) => (
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
