
import { FaPauseCircle, FaPlayCircle, FaWindowClose } from "react-icons/fa";
import { BsPlayBtn , BsPauseBtn} from "react-icons/bs";

import React, { useState, useEffect } from 'react';


export const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else{
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} style={{width:"1px", height:"1px"}}/>
      <div onClick={handlePlayPause} style={{maxWidth:"50px", display:"flex",justifyContent:"center", alignItems:"center", margin:"0px auto"}}>
        {isPlaying ? <BsPauseBtn  style={{color:"#0cb3a8", fontSize:"25px", margin:"0 10px"}}/> : <BsPlayBtn  style={{color:"#0cb3a8", fontSize:"25px", margin:"0 10px"}}/>}
      </div>
    </>
  );
  };


export const AudioplayerCircle = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else{
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} style={{width:"1px", height:"1px"}}/>
      <div onClick={handlePlayPause} style={{maxWidth:"50px", display:"flex",justifyContent:"center", alignItems:"center", margin:"0px auto"}}>
        {isPlaying ? <FaPauseCircle  color = "#0cb3a8" size = "30"/> : <FaPlayCircle  color = "#0cb3a8" size = "30"/>}
      </div>
    </>
  );
  };
  
