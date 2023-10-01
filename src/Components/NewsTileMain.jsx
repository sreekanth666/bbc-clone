import React from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'

function NewsTileMain({title, colValue}) {
  return (
    <>
      <Container className='mt-4 mb-5'>
        <Row className='d-flex align-items-center'>
          <Col sm={`${colValue}`}>
            <h1>{`${title}`}</h1>
          </Col>
          <Col>
            <hr className='m-0' />
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col sm={5}>
            <img src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" alt="" className='img-fluid' />
            <h2 className='fw-bold mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          </Col>

          <Col>
            <Row>
              <Col sm={4}>
              <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>Lorem ipsum dolor sit, amet consectetur</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>Lorem ipsum dolor sit, amet consectetur</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>Lorem ipsum dolor sit, amet consectetur</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>Lorem ipsum dolor sit, amet consectetur</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>Lorem ipsum dolor sit, amet consectetur</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>Lorem ipsum dolor sit, amet consectetur</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NewsTileMain