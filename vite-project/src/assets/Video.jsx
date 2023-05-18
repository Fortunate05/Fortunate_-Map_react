import React from 'react'
import VideoSchool from '../assets/DA1.mp4'
// import Video from 'Video.css'

const Video = () => {
  return (
    <div>
        <video className='vdo' controls>
         <source src={VideoSchool} type="video/mp4" />
        </video>
    </div>
  )
}

export default Video