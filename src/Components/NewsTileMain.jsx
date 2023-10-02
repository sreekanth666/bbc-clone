import React, { useEffect, useState } from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'
import newsAxiosInstance from '../newsAxiosInstance'
import { Link } from 'react-router-dom'
import './NewsTileMain.css'

function NewsTileMain({title, colValue, url}) {
  const [fetchInfo, setFetchInfo] = useState([])
  const fetchData = async() => {
    const {data} = await newsAxiosInstance.get(url)
    setFetchInfo(data)
  }

  useEffect(() => {
    fetchData()
  },[])
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
          <Link to={`${fetchInfo.articles && fetchInfo.articles[0].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
            <img src={`${fetchInfo.articles && fetchInfo.articles[0].urlToImage?fetchInfo.articles[0].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} alt="" className='img-fluid' />
            <h2 className='fw-bold mt-1'>{`${fetchInfo.articles && fetchInfo.articles[0].title}`}</h2></Link>
          </Col>

          <Col>
            <Row>
              <Col sm={4}>
              <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${fetchInfo.articles && fetchInfo.articles[1].urlToImage?fetchInfo.articles[1].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${fetchInfo.articles && fetchInfo.articles[1].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${fetchInfo.articles && fetchInfo.articles[1].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${fetchInfo.articles && fetchInfo.articles[2].urlToImage?fetchInfo.articles[2].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${fetchInfo.articles && fetchInfo.articles[2].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${fetchInfo.articles && fetchInfo.articles[2].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${fetchInfo.articles && fetchInfo.articles[3].urlToImage?fetchInfo.articles[3].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${fetchInfo.articles && fetchInfo.articles[3].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${fetchInfo.articles && fetchInfo.articles[3].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${fetchInfo.articles && fetchInfo.articles[4].urlToImage?fetchInfo.articles[4].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${fetchInfo.articles && fetchInfo.articles[4].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${fetchInfo.articles && fetchInfo.articles[4].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${fetchInfo.articles && fetchInfo.articles[5].urlToImage?fetchInfo.articles[5].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${fetchInfo.articles && fetchInfo.articles[5].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${fetchInfo.articles && fetchInfo.articles[5].title}`}</Link></Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card className='rounded-0 mb-2 border-0'>
                  <Card.Img variant="top" className='rounded-0' src={`${fetchInfo.articles && fetchInfo.articles[6].urlToImage?fetchInfo.articles[6].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
                  <Card.Body className='p-0 pt-1'>
                    <Card.Title className='fw-semibold'>
                    <Link to={`${fetchInfo.articles && fetchInfo.articles[6].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                      {`${fetchInfo.articles && fetchInfo.articles[6].title}`}</Link></Card.Title>
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