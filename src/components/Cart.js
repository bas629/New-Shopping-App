import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {remove} from '../redux/slice/CartSlice'

function Cart() {
  
    const {cart}=useSelector((state)=>state)
    console.log(cart)
    const dispatch=useDispatch();
    function  removeItem(id)
    {  dispatch(remove(id))
 


    }

  return ( 
    


  
    <div>
      { cart.map((data)=>(
          <div key={data.id}>
          <div>{data.title} </div>
          <img src={data.image}></img>
          <button onClick={()=>removeItem(data.id)} >button</button>
          </div>
        

      ))
}





    </div>
  )
}

export default Cart