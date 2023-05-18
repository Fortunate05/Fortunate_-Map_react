import React from 'react'
import VideoSchool from '../assets/video.mp4'

const Video = () => {
  return (
    <div>
        <video width="100%" height="100%" controls>
         <source src={VideoSchool} type="video/mp4" />
        </video>
    </div>
  )
}

export default Video