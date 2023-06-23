import React,{useState} from 'react';
import { useEffect } from 'react';


const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    
    const handlePrice = ()=>{
        let ans = 0;
        
        cart.map((item)=>(
            ans+= cart.length * item.price 
        ))
        setPrice(ans);
        }
    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article className='container'>
        <div className='row'>
          <div className='col-7'>  
          <p className='fs-3 py-3  border-light  border-bottom '><span><i class="bi bi-chevron-left"></i></span> Shopping Continue</p>
          <p className='fs-4 '>You have item on your Cart</p>
        {
            cart?.map((item)=>(
                
                <div className="cart_box bg-transparent border shadow-lg d-flex justify-content-between align-items-center my-3 p-3 rounded-3" key={item.id}>
                    <div className="cart_img rounded-3 d-flex align-items-center">
                        <img src={item.image} width="90px" height="90px"/>
                        <p>{item.title}</p>
                    </div>
                    <div>

                        <span onClick={()=>handleChange(item, +1)}> <i class="bi bi-caret-up-fill fs-3"></i> </span>
                        <sapn onClick={()=>handleChange(item, -1)}> <i class="bi bi-caret-down-fill fs-3"></i> </sapn>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <span onClick={()=>handleRemove(item.id)} >Remove</span>
                    </div>
                </div>
              
            ))}
            </div>
            <div className='col-5'>
        <div className='total rounded-4 px-3'>
            <div className='form-header d-flex justify-content-between  py-4'>
                <h1 className='text-white'>Contact Details</h1>
                <span><i class="bi bi-person fs-1 text-white"></i></span>
            </div>
              <h2 className='text-white'>Card types</h2>
              <div className='card-types row d-flex justify-content-between g-3'>
                 <span className='py-4 col m-3 rounded-2 bg-secondary justify-content-center fs-5 text-white'>Master Card</span>
                 <span className='py-4 col m-3 rounded-2 bg-secondary justify-content-center fs-5 text-white'>Visa</span>
                 <span className='py-4 col m-3 rounded-2 bg-secondary justify-content-center fs-5 text-white'>Pay Pal</span>
              </div>
               
              <form action="/action_page.php">
  <div class="mb-3 mt-3">
    <label for="email" class="form-label  text-white">Name of card</label>
    <input type="email" class="form-control" id="email" placeholder="Name" name="email"/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label text-white">Crd Number</label>
    <input type="password" class="form-control" id="pwd" placeholder="111 223342 3425" name="pswd"/>
  </div>
  <div class="row">
    <div class="col">
    <label for="email" class="form-label text-white">Expiration Date</label>
      <input type="text" class="form-control" placeholder="MM/YY" name="email"/>
    </div>
    <div class="col">
    <label for="email" class="form-label">CVV</label>
      <input type="password" class="form-control" placeholder="123" name="pswd"/>
    </div>
    </div>
 
</form>
            <div className='paydetails mb-4 my-5 py-4 border-top'>
                <p className='fs-5 d-flex justify-content-between text-white'>Subtotal <span>$ {price}</span></p>

            </div>
            
        </div>
        </div>
        </div>
    </article>
  );
}

export default Cart;