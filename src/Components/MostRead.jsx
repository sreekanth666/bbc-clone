import React from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'

function MostRead() {
  return (
    <>
      <Container className='mt-4 mb-5'>
        <Row className='d-flex align-items-center'>
          <Col sm={3}>
            <h1>Most read</h1>
          </Col>
          <Col>
            <hr className='m-0' />
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col sm={6}>
            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>1</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>

            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>2</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>

            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>3</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>

            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>4</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>

            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>5</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>
          </Col>

          <Col>
          <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>6</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>

            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>7</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>

            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>8</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>

            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>9</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>

            <div className='items d-flex align-items-center'>
              <h1 style={{color:'#bd0e02'}} className='me-3'>10</h1>
              <p className='m-0 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labo</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MostRead