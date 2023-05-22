import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Placeholder from 'react-bootstrap/Placeholder';
import '../Pages/Home.css'
import Navbar from '../components/Navbar';
import '../pages/AboutUs.css'

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <ListGroup>
        <ListGroup.Item><h3>PWD doing what?</h3><Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder></ListGroup.Item>
        <ListGroup.Item variant="primary">We are here at The Digital Academy in Auckland Park.
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">We study Information Technology Support System on Level 5.</ListGroup.Item>
        <ListGroup.Item variant="success">We learn and practice Code, and Logical.</ListGroup.Item>
        <ListGroup.Item variant="danger">We have an interpreter for us as Deaf learners.</ListGroup.Item>
        <ListGroup.Item variant="warning">We have the laptops and Wifi.</ListGroup.Item>
        <ListGroup.Item variant="info">We have LMS every Thursday.</ListGroup.Item>
        <ListGroup.Item variant="light">we hands-on development skills that are needed.</ListGroup.Item>
        <ListGroup.Item variant="dark">We have a presentation.</ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default AboutUs

