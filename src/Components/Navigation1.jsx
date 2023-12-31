import React, { useState } from 'react'
import './Navigation1.css'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation1() {
    const [formData, setFormData] = useState()
    const handleForm = (e) => {
        e.preventDefault()
        const data = e.target.value
        setFormData(data)
    }
    
    return (
        <>
            <Navbar expand="lg" className="nav">
                <Container fluid className='p-3 ps-5 pe-5'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg" alt="BBC Logo" className='logo' />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 fw-bold"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">News</Nav.Link>
                        <Nav.Link href="#">Sport</Nav.Link>
                        <Nav.Link href="#">Future</Nav.Link>
                        <Nav.Link href="#">Culture</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search BBC"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleForm}
                        />
                        <Link to={`/search?query=${formData}`}><Button variant="outline-success" className='rounded-0' type='submit'>Search</Button></Link>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation1

