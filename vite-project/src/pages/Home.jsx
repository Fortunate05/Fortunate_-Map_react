import React from 'react'
import Navbar from '../components/Navbar'
import '../Pages/Home.css'
import Slider from '../components/Slider'
import Video from '../assets/Video'



export default function Home() {
  return (
    <div>
      <Navbar />
      <Video/>
      <Slider/>
     
    </div>
  )
}
