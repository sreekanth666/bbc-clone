import React, { useEffect, useState } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import newsAxiosInstance from '../newsAxiosInstance';
import { Link } from 'react-router-dom';
import './MostRead.css'

function MostRead({url}) {
  const [mostRead, setMostRead] = useState([])
  const fetchData = async() => {
    const {data} = await newsAxiosInstance.get(url)
    setMostRead(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
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
            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>1</h1>
              <Link to={`${mostRead.articles && mostRead.articles[0].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[0].title}`}</p>
              </Link>
            </div>

            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>2</h1>
              <Link to={`${mostRead.articles && mostRead.articles[1].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[1].title}`}</p></Link>
            </div>

            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>3</h1>
              <Link to={`${mostRead.articles && mostRead.articles[2].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[2].title}`}</p></Link>
            </div>

            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>4</h1>
              <Link to={`${mostRead.articles && mostRead.articles[3].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[3].title}`}</p></Link>
            </div>

            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>5</h1>
              <Link to={`${mostRead.articles && mostRead.articles[4].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[4].title}`}</p></Link>
            </div>
          </Col>

          <Col>
          <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>6</h1>
              <Link to={`${mostRead.articles && mostRead.articles[5].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[5].title}`}</p></Link>
            </div>

            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>7</h1>
              <Link to={`${mostRead.articles && mostRead.articles[6].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[6].title}`}</p></Link>
            </div>

            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>8</h1>
              <Link to={`${mostRead.articles && mostRead.articles[7].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[7].title}`}</p></Link>
            </div>

            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-4'>9</h1>
              <Link to={`${mostRead.articles && mostRead.articles[8].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[8].title}`}</p></Link>
            </div>

            <div className='items d-flex align-items-center mt-2 mb-2'>
              <h1 style={{color:'#bd0e02'}} className='me-3'>10</h1>
              <Link to={`${mostRead.articles && mostRead.articles[9].url}`} target="_blank" style={{color:"black", textDecoration:"none"}} className='link-hover'>
              <p className='m-0 fw-semibold'>{`${mostRead.articles && mostRead.articles[9].title}`}</p></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MostRead