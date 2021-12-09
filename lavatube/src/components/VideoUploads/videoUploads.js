import React from 'react';

import './videoUploads.css';

const VideoUploads = props => {
  console.log(props.videos);
  return (
    <ul className="video-uploads">
        {props.videos.map((video) => {
            return <li>{video.text}</li>;
        })}
    </ul>
  );
};

export default VideoUploads;