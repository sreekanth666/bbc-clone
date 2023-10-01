import React from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <Container className='mt-4 mb-5'>
        <Row className='d-flex align-items-center'>
          <Col sm={3}>
            <h1>Find us here</h1>
          </Col>
          <Col>
            <hr className='m-0' />
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col sm={3}>
            <i className="fa-brands fa-square-x-twitter fs-1 m-1"></i>
            <i className="fa-brands fa-square-facebook fs-1 m-2"></i>
            <i className="fa-brands fa-square-instagram fs-1 m-2"></i>
          </Col>

          <Col sm={3}>
            <h4><i class="fa-solid fa-envelope-open-text"></i> NEWS DAILY</h4>
            <p>Get news from the BBC in your inbox each weekday morning</p>
          </Col>

          <Col sm={3}>
            <h4><i class="fa-solid fa-mobile-screen-button"></i> NEWS APP</h4>
            <p>Find out more about our BBC News App</p>
          </Col>

          <Col sm={3}>
            <p className='m-0'>Email us at haveyoursay@bbc.co.uk</p>
            <p className='m-0'>Follow Have Your Say on Twitter</p>
            <p className='m-0'>Why you can trust BBC News</p>
          </Col>
        </Row>
      </Container>
      <div className='container-fluid text-light p-3' style={{backgroundColor:'#4c4c4c'}}>
        <h1 className='fw-bold'>Explore the BBC</h1>
        <Row className='mt-4 mb-4'>
          <Col sm={3}>
            <p className='m-0'>Home</p>
            <p className='m-0'>Future</p>
          </Col>
          <Col sm={3}>
            <p className='m-0'>News</p>
            <p className='m-0'>Culture</p>
          </Col>

          <Col sm={3}>
            <p className='m-0'>Sport</p>
            <p className='m-0'>TV</p>
          </Col>

          <Col sm={3}>
            <p className='m-0'>Reel</p>
            <p className='m-0'>Weather</p>
          </Col>
        </Row>
        <p className='text-center fw-semibold'>
          <span className='m-2'>Terms of Use</span>
          <span className='m-2'>About the BBC</span>
          <span className='m-2'>Privacy Policy</span>
          <span className='m-2'>Cookies</span>
          <span className='m-2'>Accessibility Help</span>
          <span className='m-2'>Parental Guidance</span>
          <span className='m-2'>Contact the BBC</span>
          <span className='m-2'>BBC emails for you</span>
          <span className='m-2'>Advertise with us</span>
          <span className='m-2'>Do not share or sell my info</span>
        </p>
        <p className='text-center' style={{fontSize:'small'}}>Copyright © 2023 BBC. The BBC is not responsible for the content of external sites. Read about our approach to external linking.</p>
      </div>
    </>
  )
}

export default Footer