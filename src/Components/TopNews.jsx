import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'

function TopNews() {
  return (
    <>
      <Container className='mt-4 mb-5'>
        <Row>
          <Col sm={5}>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cumque eligendi obcaecati totam dolorum a architecto hic iusto. Eligendi, iure.</p>
          </Col>
          <Col>
            <img src="https://www.livemint.com/lm-img/img/2023/10/01/600x338/im-860353_1696145716374_1696145987056.jpg" alt="News Report Image" style={{width:"100%"}} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TopNews