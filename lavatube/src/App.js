import React, {useState} from 'react';

import './App.css';

import VideoUploads from './components/VideoUploads/videoUploads';
import NewVideo from './components/NewVideo/NewVideo';

function App() {
  const [videoUploads, setVideoUploads] = useState([
    {id: 'vu1', text: 'Rapping On the Hill'},
    {id: 'vu2', text: "Thanksgiving at the Harrington's"},
    {id: 'vu3', text: "Skateboarding In Denver, Colorado USA 11/27/2021"},
  ]);

  const addNewVideoHandler = newVideo => {
    //setVideoUploads(videoUploads.concat(newVideo));
    setVideoUploads((prevVideoUploads) => prevVideoUploads.concat(newVideo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div className="video-uploads">
            <h2>Video Uploads</h2>
            <NewVideo onAddVideo={addNewVideoHandler} />
            <VideoUploads videos={videoUploads} />
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
