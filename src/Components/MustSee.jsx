import React, { useEffect, useState } from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'
import newsAxiosInstance from '../newsAxiosInstance';
import { Link } from 'react-router-dom';

function MustSee({url}) {
  const [mustSee, setMustSee] = useState([])
  const fetchData = async() => {
    const {data} = await newsAxiosInstance.get(url)
    setMustSee(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Container className='mt-4 mb-5'>
        <Row className='d-flex align-items-center'>
          <Col sm={2}>
            <h1>Must see</h1>
          </Col>
          <Col>
            <hr className='m-0' />
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col sm={5}>
          <Link to={`${mustSee.articles && mustSee.articles[0].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
            <img src={`${mustSee.articles && mustSee.articles[0].urlToImage?mustSee.articles[0].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} alt="" className='img-fluid' />
            <h2 className='fw-bold mt-1'>{`${mustSee.articles && mustSee.articles[0].title}`}</h2></Link>
          </Col>

          <Col>
            <Row>
              <Col sm={4}>
                <Card className='rounded-0 border-0 mb-1'>
                    <Card.Header as="h5" className='fw-semibold text-light rounded-0 border-0' style={{backgroundColor:'#bd0e02'}}>How to watch</Card.Header>
                    <Card.Body className='rounded-0' style={{backgroundColor:'#f8e7e6'}}>
                      <Card.Text className='fw-semibold m-0'>BBC World News TV</Card.Text>
                      <Card.Text className='m-0'>
                        The latest global news and more
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className='rounded-0 border-0 mb-1'>
                  <Card.Header as="h5" className='fw-semibold bg-dark text-light rounded-0 border-0'>Listen live</Card.Header>
                  <Card.Body className='rounded-0' style={{backgroundColor:'#f8e7e6'}}>
                    <Card.Text className='fw-semibold m-0'>BBC World service radio</Card.Text>
                    <Card.Text>
                      Listen to the stories
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${mustSee.articles && mustSee.articles[1].urlToImage?mustSee.articles[1].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${mustSee.articles && mustSee.articles[1].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${mustSee.articles && mustSee.articles[1].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${mustSee.articles && mustSee.articles[2].urlToImage?mustSee.articles[2].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${mustSee.articles && mustSee.articles[2].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${mustSee.articles && mustSee.articles[2].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${mustSee.articles && mustSee.articles[3].urlToImage?mustSee.articles[3].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${mustSee.articles && mustSee.articles[3].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${mustSee.articles && mustSee.articles[3].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${mustSee.articles && mustSee.articles[4].urlToImage?mustSee.articles[4].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${mustSee.articles && mustSee.articles[4].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${mustSee.articles && mustSee.articles[4].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${mustSee.articles && mustSee.articles[5].urlToImage?mustSee.articles[5].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${mustSee.articles && mustSee.articles[5].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>

                      {`${mustSee.articles && mustSee.articles[5].title}`}
                      </Link></Card.Title>
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

export default MustSee