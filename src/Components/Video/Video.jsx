import React from 'react';
import './Video.css';

const Video = ({ title, time, views, channel }) => {
    return (
        <div className="video-container">
            <img
                src="https://www.istockphoto.com/collaboration/boards/oVCcKYYj5E6LY6isl4LZzA"
                alt="Salad"
            />
            <div className="video-content">
                <div>{title}</div>
                <div>{time}</div>
                <div>{views}</div>
                <div>{channel}</div>
            </div>
        </div>
    );
};

export default Video;
