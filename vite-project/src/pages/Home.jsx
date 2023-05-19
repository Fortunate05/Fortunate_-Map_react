import React from 'react'
import Navbar from '../components/Navbar'
import '../Pages/Home.css'
import Slider from '../components/Slider'
import Video from '../assets/Video'
import Images from './Images'



export default function Home() {
  return (
    <div>
      <Navbar />
      <Images/>
      <Video/>
      <Slider/>
     
    </div>
  )
}
