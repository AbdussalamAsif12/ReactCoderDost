import React from "react";
import "./Playbutton.css";
const Playbutton = ({ children, onplay, onpause }) => {
  let playing = false;
  function HandleClick(e) {
    // console.log(e);
    e.stopPropagation()
    if (playing) {
      onpause();
    } else {
      onplay();
    }

    playing = !playing;
  }
  return (
    <>
      <button onClick={HandleClick}>
        {children} : {playing ? ">" : "||"}
      </button>
    </>
  );
};

export default Playbutton;
