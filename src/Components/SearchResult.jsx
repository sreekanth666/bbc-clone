import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Row, Container, Col, Card } from 'react-bootstrap';
import newsAxiosInstance from '../newsAxiosInstance';
import { Link } from 'react-router-dom';
import request from '../requests'

function SearchResult() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query')
    console.log(query);
    const date = "2023-10-01"
    const mid = `q=${query}&from=${date}`
    const head = request.searchNews
    const end = request.searchEnd
    const url = head+mid+end
    console.log(url);

    const [searchResult, setSearchResult] = useState([])
    const fetchData = async() => {
        const {data} = await newsAxiosInstance.get(url)
        setSearchResult(data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    console.log(searchResult);
    return (
        <>
            <Container className='mt-4 mb-5'>
                <Row className='mt-2'>
                <Col sm={6}>
                    {searchResult.articles?.slice(0, 20).map((article, index) => (
                        <div className="searchCard mb-2" key={index}>
                        <Row>
                            <Col xs={4}>
                            <img
                                src={article.urlToImage || 'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}
                                alt=""
                                className="img-fluid"
                            />
                            </Col>
                            <Col xs={8}>
                            <p>
                                <Link to={article.url} target="_blank" style={{ color: 'black', textDecoration: 'underline' }}>
                                {article.title}
                                </Link>
                            </p>
                            </Col>
                        </Row>
                        </div>
                    ))}
                </Col>

                <Col sm={6}>
                    {searchResult.articles?.slice(20, 40).map((article, index) => (
                        <div className="searchCard mb-2" key={index}>
                        <Row>
                            <Col xs={4}>
                            <img
                                src={article.urlToImage || 'https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png'}
                                alt=""
                                className="img-fluid"
                            />
                            </Col>
                            <Col xs={8}>
                            <p>
                                <Link to={article.url} target="_blank" style={{ color: 'black', textDecoration: 'underline' }}>
                                {article.title}
                                </Link>
                            </p>
                            </Col>
                        </Row>
                        </div>
                    ))}
                </Col>

                </Row>
            </Container>
        </>
    )
}

export default SearchResult