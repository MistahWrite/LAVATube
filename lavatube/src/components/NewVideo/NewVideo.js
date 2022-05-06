import React, { useState } from 'react';

import './NewVideo.css';

const NewVideo = props => {
  const [enteredText, setEnteredText] = useState('');

  const addVideoHandler = event => {
    event.preventDefault();

    const newVideo = {
        id: Math.random().toString(),
        text: enteredText
    };
    
    setEnteredText('');
    
    props.onAddVideo(newVideo);
  };

  const textChangeHandler = event => {
      setEnteredText(event.target.value);
  };

  return(
    <form className="new-video" onSubmit={addVideoHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default NewVideo;