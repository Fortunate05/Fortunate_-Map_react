import React from 'react'
import Navbar from '../Navbar'
import ListGroup from 'react-bootstrap/ListGroup';


export default function Home() {
  return (
    <div>
      <Navbar />

      
      <ListGroup>
        <ListGroup.Item>Deaf Staff</ListGroup.Item>
        <ListGroup.Item variant="primary">We here Digital Academy at Braamfontein.</ListGroup.Item>
        <ListGroup.Item variant="secondary">We study at Information Technology Support System.</ListGroup.Item>
        <ListGroup.Item variant="success">We learn Code and Logical.</ListGroup.Item>
        <ListGroup.Item variant="danger">We have a interpret for Deaf staff.</ListGroup.Item>
        <ListGroup.Item variant="warning">We have a laptops and Wifi for us learn trainning at IT support System.</ListGroup.Item>
        <ListGroup.Item variant="info">We have a LMS doing every Thursday.</ListGroup.Item>
        <ListGroup.Item variant="light">We have a good clean environment</ListGroup.Item>
        <ListGroup.Item variant="dark">We have a presentation as show office how we work</ListGroup.Item>
      </ListGroup>
      

    </div>
  )
}
