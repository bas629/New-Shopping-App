import React,{useEffect, useState} from 'react' 
import { IoIosCart } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
 const[cartNo,setCartNo] = useState(0);
  const {cart}=useSelector((state)=>state)
  useEffect(()=>(
   setCartNo(cart.length)

  )

,[cart]
  )



  

  return (
    <div>
        <div className='flex flex-row h-20 justify-evenly '>
         <img src="../logo.png" ></img>
        
            <div>
             <NavLink to="/" >Home</NavLink>
             <div>
             <NavLink to="/Cart" className="relative"  ><IoIosCart fontSize="30px" ></IoIosCart></NavLink> 
             {
                cartNo>0 &&
                <div className=" absolute w-5 h-5 text-white text-center my-auto  bg-red-600 rounded-full top-[1.25rem] right-[425px]"  >
                {cartNo}
                </div> }
              </div>
            
 

        </div>

    </div> 
    </div>
  )
}

export default Navbar