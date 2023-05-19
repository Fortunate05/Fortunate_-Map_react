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
        <ListGroup.Item><h3>PWD doing what</h3><Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder></ListGroup.Item>
        <ListGroup.Item variant="primary">We here Digital Academy at Braamfontein.
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">We study at Information Technology Support System Level 5.</ListGroup.Item>
        <ListGroup.Item variant="success">We learn Code and Logical.</ListGroup.Item>
        <ListGroup.Item variant="danger">We have a interpret for Deaf staff.</ListGroup.Item>
        <ListGroup.Item variant="warning">We have a laptops and Wifi for us learn trainning at IT support System.</ListGroup.Item>
        <ListGroup.Item variant="info">We have a LMS doing every Thursday.</ListGroup.Item>
        <ListGroup.Item variant="light">We have a skill code programmer.</ListGroup.Item>
        <ListGroup.Item variant="dark">We have a presentation as show office how we work.</ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default AboutUs

