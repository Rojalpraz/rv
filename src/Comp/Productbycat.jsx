import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Productbycat(props) {
    let [data,setData]=useState([])
        useEffect(()=>{
            fetch(`https://dummyjson.com/products/category/${props.aa}`).then((a)=>a.json()).then((b)=>setData(b.products))
        },[])
  return (
    <>
      
<div>
  <div className="text-center pt-11">
    <h1 className="font-bold text-4xl mb-4 uppercase">Products By {props.aa} </h1>
    
  </div>
  
  <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
 {data.slice(0,3).map((a)=>(
  <div key={a.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
  <Link to={`/detail/${a.id}`}>
    <img src={a.thumbnail} className=' h-60 w-72 object-cover rounded'/>
    <div className="px-4 py-3 w-72">
      <span className="text-gray-400 mr-3 uppercase text-xs">{a.brand}</span>
      <p className="text-lg font-bold text-black truncate block capitalize">{a.title}</p>
      <div className="flex items-center">
        <p className="text-lg font-semibold text-black cursor-auto my-3">${a.price}</p>
        
                
      </div>
    </div>
  </Link>
</div>


 ))}
  
  </section>
  
</div>


    </>
  )
}

export default Productbycat
