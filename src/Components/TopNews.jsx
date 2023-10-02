import React, { useEffect, useState } from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'
import newsAxiosInstance from '../newsAxiosInstance';
import { Link } from 'react-router-dom';
import './TopNews.css'

function TopNews({url}) {
  const [topNews, setTopNews] = useState([])
  const fetchData = async() => {
    const {data} = await newsAxiosInstance.get(url)
    setTopNews(data)
  }
  useEffect (() => {
      fetchData()
  }, [])
  return (
    <>
      <Container className='mt-4 mb-5'>
        <Row>
          <Col sm={5}>
            <Link to={`${topNews.articles && topNews.articles[0].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <h1>{`${topNews.articles && topNews.articles[0].title}`}</h1>
            </Link>
            <p>{`${topNews.articles && topNews.articles[0].description?topNews.articles[0].description:""}`}</p>
          </Col>
          <Col>
            <img src={`${topNews.articles && topNews.articles[0].urlToImage?topNews.articles[0].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} alt="News Report Image" style={{width:"100%"}} />
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col sm={3}>
            <Card className='rounded-0 mb-1 border-0'>
              <Card.Img variant="top" className='rounded-0' src={`${topNews.articles && topNews.articles[1].urlToImage?topNews.articles[1].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
              <Card.Body className='p-0'>
                <Card.Title className='fw-bold'>
                <Link to={`${topNews.articles && topNews.articles[1].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                  {`${topNews.articles && topNews.articles[1].title}`}
                  </Link>
                </Card.Title>
                <Card.Text>
                {`${topNews.articles && topNews.articles[1].description?topNews.articles[1].description:""}`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className='rounded-0 mb-1 border-0'>
              <Card.Img variant="top" className='rounded-0' src={`${topNews.articles && topNews.articles[2].urlToImage?topNews.articles[2].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
              <Card.Body className='p-0'>
                <Card.Title className='fw-bold'>
                  <Link to={`${topNews.articles && topNews.articles[2].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                    {`${topNews.articles && topNews.articles[2].title}`}
                    </Link></Card.Title>
                <Card.Text>
                {`${topNews.articles && topNews.articles[2].description?topNews.articles[2].description:""}`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className='rounded-0 mb-1 border-0'>
              <Card.Img variant="top" className='rounded-0' src={`${topNews.articles && topNews.articles[3].urlToImage?topNews.articles[3].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
              <Card.Body className='p-0'>
                <Card.Title className='fw-bold'>
                <Link to={`${topNews.articles && topNews.articles[3].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                  {`${topNews.articles && topNews.articles[3].title}`}
                  </Link></Card.Title>
                <Card.Text>
                {`${topNews.articles && topNews.articles[3].description?topNews.articles[3].description:""}`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className='rounded-0 mb-1 border-0'>
              <Card.Img variant="top" className='rounded-0' src={`${topNews.articles && topNews.articles[4].urlToImage?topNews.articles[4].urlToImage:'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}`} />
              <Card.Body className='p-0'>
                <Card.Title className='fw-bold'>
                <Link to={`${topNews.articles && topNews.articles[4].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
                  {`${topNews.articles && topNews.articles[4].title}`}
                  </Link></Card.Title>
                <Card.Text>
                {`${topNews.articles && topNews.articles[4].description?topNews.articles[4].description:""}`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TopNews