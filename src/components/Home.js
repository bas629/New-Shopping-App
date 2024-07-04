import React,{useState,useEffect} from 'react'
 import HomeItem from '../helper/HomeItem';

function Home() {
    const API_URL = "https://fakestoreapi.com/products"; 
      
    const [item,setItem]=useState([]); 

   async function fetchItem()
   {  try{
       let res  = await fetch(API_URL); 
        let data = await res.json();
          setItem(data); 
          console.log(data)


     }
    catch(err){
   console.log("Error fetching"); 


    }


   }
  useEffect(()=>{

  fetchItem();

  },[])

  
  
    return (
    <div className='flex flex-row w-[80%] flex-wrap gap-7 justify-center  mx-auto mt-10'>
    {  item.map((items)=>(
        <HomeItem  key={items.id}  items={items}></HomeItem>

    )  )
}


    </div>
  )
}

export default Home