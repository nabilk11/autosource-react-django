import React from 'react';
import { Row, Container, Card, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SneakerNews = () => {
  return (
    <div>
      <Row>
      <h1><strong>Sneaker News</strong></h1>

      
      <Col md={4}>
      <a href={'https://sneakernews.com/air-jordan-release-dates/'} >
        
        <Card.Title>Jordan Release Dates</Card.Title>
        <Card.Body>
          <Image width={'150px'} src='/images/jordan11low.webp' ></Image>
        </Card.Body>
        
        </a>
      </Col>
      <Col md={4}>
      <a href={'https://sneakernews.com/adidas-yeezy-release-dates/'} >
        
        <Card.Title>Yeezy Release Dates</Card.Title>
        <Card.Body>
          <Image width={'150px'} src='/images/yeezybeluga.webp' ></Image>
        </Card.Body>
        
        </a>
      </Col>
      <Col md={4}>
      <a href='https://sneakernews.com/adidas-yeezy-release-dates/' >
        
        <Card.Title>Checkout the Latest News</Card.Title>
        <Card.Body>
          <Image width={'150px'} src='/images/sbd_delasoul.webp' ></Image>

        </Card.Body>
        
        </a>
      </Col>
      </Row>
      <Row>
      <Col md={12}>
          <a href={'https://sneakernews.com/release-dates/'} >
      <Card.Title>All Upcoming Releases</Card.Title>
          <Card.Body>
              <Image src='/images/dunkrels.png'></Image>
          </Card.Body>
          </a>
          </Col>
      </Row>

      </div>
  )
}
