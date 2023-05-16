import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../components/Slider.css'
import image1 from '../assets/DA_Logo.jpg'


export default function Slider() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>

<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>




    </div>
  )
}
