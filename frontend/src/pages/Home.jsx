import React, { useEffect, useState } from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SneakerNews } from '../components/SneakerNews';

export const Home = () => {
  const [token, setToken]= useState()

  useEffect(()=> {
   const userToken = localStorage.getItem('userToken')
   setToken(userToken)
    
  }, [token])

  return (
    <Container>
      <div className="m-3" >
          <h1 className="heading"><strong>Welcome to SneakerSource! </strong></h1>
          <h3 className='text-muted' >
          A members only listing platform for sneakers and apparel!  
        </h3>
        <div className='mt-4 mb-4'>
          <h3>FREE 3 Day Shipping on All Orders!</h3>
          <Link to={'/products'}>View Products</Link>
        </div>
        {/* <div className='mt-4 mb-4'>
          <h3>Got Sneakers or Products to Sell?</h3>
          {token.access ? <p>Vist Your <Link to={'/login'}>Profile</Link> to List!</p>
         : <p> <Link to={'/login'}>Login</Link> or <Link to={'/register'}>Register</Link></p>}
         
        </div> */}

        

      <div>

      </div>
      <div>
        <SneakerNews />
    
      </div>
      
      </div>
    </Container>


   
  )
};
