import React from 'react'
import Navbar from '../components/Navbar'
import '../Pages/Home.css'
import Slider from '../components/Slider'
import Video from '../assets/Video'
import Images from './Images'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div>
      <Navbar />
      <Images/>
      <Slider/>
      <Video/>
      <Footer/>
     
    </div>
  )
}
