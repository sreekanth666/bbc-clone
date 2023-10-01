import React from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'

function TopNewsTiles() {
  return (
    <>
      <Container className='mt-4 mb-5'>
        <Row className='mt-5'>
          <Col sm={3}>
            <Card className='rounded-0 mb-1 border-0'>
              <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
              <Card.Body>
                <Card.Title className='fw-bold'>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className='rounded-0 mb-1 border-0'>
              <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
              <Card.Body>
                <Card.Title className='fw-bold'>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className='rounded-0 mb-1 border-0'>
              <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
              <Card.Body>
                <Card.Title className='fw-bold'>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className='rounded-0 mb-1 border-0'>
              <Card.Img variant="top" className='rounded-0' src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" />
              <Card.Body>
                <Card.Title className='fw-bold'>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default TopNewsTiles