import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add,remove} from '../redux/slice/CartSlice'


function HomeItem({items}) {
 const {cart}= useSelector((state)=> state)
 const  dispatch = useDispatch();
 const [cartButton,setCartButton]=useState(true);

 function addCart()
 {  dispatch(add(items));
    console.log(cart)
   setCartButton(false);
 }
 function removeCart()
 {  dispatch(remove(items.id));
    console.log(cart)
   setCartButton(true);
 }

  return (
    <div>
     <div>{items.title} </div>
     <img src={items.image}></img>
      <div>{items.price}</div>
       <div>
         {
         cart.some((p) => p.id===items.id) ? <button onClick={removeCart} > Remove to cart</button>:<button onClick={addCart}>Add to Cart</button>

         }

       </div>

    </div>
  )
}

export default HomeItem