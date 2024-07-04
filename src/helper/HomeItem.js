import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add,remove} from '../redux/slice/CartSlice'
 import "../App.css"
 import toast, { Toaster } from 'react-hot-toast';

function HomeItem({items}) {
 const {cart}= useSelector((state)=> state)
 const  dispatch = useDispatch();
 const [cartButton,setCartButton]=useState(true);

 function addCart()
 {  dispatch(add(items));
    console.log(cart)
  
    toast.success('Add At Cart');
   setCartButton(false);
 }
 function removeCart()
 {  dispatch(remove(items.id));
    console.log(cart)
    toast.success('Remove At Cart');
   setCartButton(true);
 }

  return (
    <div className='w-[270px] h-[400px]   border-black border-4  rounded-2xl hover:scale-110 ease-linear duration-300 '  >
     <div className=' flex flex-col   items-center  gap-4 mt-4 '>
     <div className='text-xl font-semibold' >{items.title.length<20?(items.title) :(items.title.substring(0,16)) }....</div>
     <div className='text-xs text-slate-500  w-36   '>{items.description.length<20 ? (items.description) :(items.description.substring(0,50)) }.....</div>
     <img src={items.image} className='box' ></img>
     <div>
        <div className='flex flex-row gap-14'>
      <div className='text-green-600 font-bold'>${items.price}</div>
       
         {
         cart.some((p) => p.id===items.id) ? <button className='button-28'    onClick={removeCart} > Remove to cart</button>:<button className='button-28'  onClick={addCart}>Add to Cart</button>

         }     <Toaster
  position="top-center"
  reverseOrder={false}
/>
       </div>
       </div>
     </div>
     <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  )
}

export default HomeItem

{/* <button class="button-28" role="button">Button 28</button> */}