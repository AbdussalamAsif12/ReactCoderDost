import React, { useState } from "react";
import "./Playbutton.css";
const Playbutton = ({ children, onplay, onpause }) => {
  const [playing,setPlaying] = useState("")
  function HandleClick(e) {
    // console.log(e);
    e.stopPropagation()
    if (playing) {
      onpause();
    } else {
      onplay();
    }

    setPlaying(!playing);
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
