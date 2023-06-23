import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Card, Button } from 'react-bootstrap';

const Home= ({item, handleClick}) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return ( 
    <>
    <h1 className=' mb-4'>Products</h1>
    <div className='row gy-4 justify-content-between'>
      {products.map(product => (
       <div class="card" key={product.id}>
       <img src={product.image} class="card-img-top" alt="..."/>
       <div class="card-body">
         <h5 class="card-title">{product.title}</h5>
         <p class="card-text fw-bold fs-2">${product.price}</p>
         <a href="#" class="btn btn-primary" onClick={()=>handleClick(product)}>Add To Cart</a>
       </div>
     </div>
      ))}
    </div>
    </>
  );
};

export default Home;
