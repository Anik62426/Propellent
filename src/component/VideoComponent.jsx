import React,{useCallback, useRef,useState} from 'react'
import { Play,Pause,Volume2,Maximize,Minimize } from 'lucide-react';
import "../component/VideoComponent.css";
import "../App.css";

const VideoComponent = () => {
  return (
    <div>
        <Card/>
    </div>
  )
}

function Card(){
   
  


    return(
     
        <div className='m-10'>
     
        <div className='max-w-72 rounded-lg border-4 border-teal-500 animate-border-color'>
        <video
        className='rounded-md h-80  object-cover '
        controls
        src="https://firebasestorage.googleapis.com/v0/b/parrot-prod-21b3c.appspot.com/o/misc%2FshortBdayElonSmall.mp4?alt=media&token=190030d3-e895-4801-9e21-22ae49dbaf61"
      />
        </div>

       <div className='panda mt-12 max-w-72 '>
       <video
        className='rounded-md h-80  object-cover '
        controls
        src="https://firebasestorage.googleapis.com/v0/b/parrot-prod-21b3c.appspot.com/o/misc%2FshortBdayElonSmall.mp4?alt=media&token=190030d3-e895-4801-9e21-22ae49dbaf61"
      />
       </div>
        </div>
    )
}


export default VideoComponent