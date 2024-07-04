import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {remove} from '../redux/slice/CartSlice'
import "../App.css"
import { NavLink } from 'react-router-dom'
import { FcDeleteDatabase } from "react-icons/fc";
import  "../App.css"

function Cart() {
    const [totalAmount,SetTotalAmount]=useState(0)
    const {cart}=useSelector((state)=>state)
    console.log(cart)
    const dispatch=useDispatch();
    function  removeItem(id)
    {  dispatch(remove(id))
 


    } 
 useEffect(()=>{
    let t=0;
  cart.forEach(element => {
     t=t+element.price;
  });
 t=Math.round(Number(t) * 100) / 100;

  SetTotalAmount(t)

 },[cart])


  return ( 
    


  
    <div className='flex flex-row justify-center gap-3 mt-5 flex-wrap-reverse' >
      {  cart.length >0   ?
      
      
    (   
     <div className=' w-[70%]  flex flex-col   ' >
         { cart.map((data)=>(
            <div >
          <div key={data.id}  className='flex flex-row  mx-auto  gap-3  p-5 flex-wrap' > 
          <img src={data.image} className='box'></img>
          <div className='flex flex-col gap-3'>
          <div className='font-semibold'>{data.title} </div>
          <div className='text-slate-500'>{data.description.substring(0,100)}....</div>
         <div className='flex flex-row justify-between'>
            <div className='text-green-500 font-bold'>${data.price}</div>
          <button onClick={()=>removeItem(data.id)} ><FcDeleteDatabase size="30px"></FcDeleteDatabase></button>
          </div>
          </div> 
          
         </div>
        <div className='  h-[3px] bg-green-300 mx-auto'></div>
         </div>
      ) )} </div>) :(<div className=' flex flex-col justify-center items-center mt-40' >No Products
            <NavLink className='button-28 w-40 ' to="/" >Shop Now</NavLink>
      </div>)
}



   <div className='text-2xl  font-semibold  space-y-1'  > <p>Your Cart</p> 
    <p>Summary</p>
     <p>Total Items: {cart.length}</p>
      <p className='text-blue-600'  >Total Amount: ${totalAmount}</p>
        <button className='button-28 text-2xl  font-semibold'>Cheak Out</button>
    </div>

    </div>
  )
}

export default Cart