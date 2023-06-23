import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Nav from './Navbar';
import Cart from './Cart';
import { Navbar } from 'react-bootstrap';

function App()
{
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = (item) =>{
    let isPresent = false;
    cart.forEach((product)=>{
         if(item.id === product.id){
          isPresent = true;
         }
    })
    if(isPresent)
      return;
      setCart([...cart, item]);
  }
  
  const handleChange = (item, d)=>{
    let ind = -1;
    cart.forEach((data,index)=>{
        if(data.id === item.id){
          ind = index;
        }
    });
    const tempArr = cart;
    tempArr[ind].cart.length +=d;

    if(tempArr[ind].cart.length === 0)
         tempArr[ind].cart.length = 1;
      setCart([...tempArr])   
  }
   
  return(
    <div className='container bg-light px-5 rounded-5'>
      <Nav size={cart.length} setShow={setShow}/>
      {
        show ? <Home handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
         
    </div>
        
      
   
  );
}

export default App;
