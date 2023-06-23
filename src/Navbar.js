
import React from "react";
 
import './App.css';

function Navbar({size, setShow})
{
    return(
        <>
          <div className="nav__bar d-flex justify-content-start align-items-center w-25 my-3 py-4">
            <div>
            <a href="#" className="text-black" onClick={()=>setShow(true)}>Home</a>
            </div>
            <div onClick={()=>setShow(false)}>
            <a href="#" className="ms-5 text-black">Cart<span>{size}</span></a>
            </div>
          </div>
        </>
    );
}
export default Navbar;