import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';



function Footer() {
  return (
        <footer>
            <Container>
                <Row>
                    <Col >
                    <div className="footer-links" >
                        <a style={{marginRight: "1rem"}} href="">Contact Us</a>
                        <a style={{marginRight: "1rem"}} href="">Privacy Policy</a>
                        <a style={{marginRight: "1rem"}} href="">Terms and Conditions</a>
                        <a style={{marginRight: "1rem"}} href="">Return Policy</a>
                    </div>
                    
                    </Col>
                </Row>
                <Row>
                    <Col className='py-2 text-center' >
                    Copyright &copy; SneakerSource 2022
                    </Col>
                </Row>
            </Container>
        </footer>
        

    
  )
}

export default Footer