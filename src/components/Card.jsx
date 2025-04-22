import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { toast } from 'react-toastify';

function Card({name,image,price,type}) {
  return (
    <div className={`w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-[12px] `}>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg '>
            <img src={image} alt='Pankcake Loading...' className='object-cover ' />
            </div>
            
            <div className='text-2xl font-semibold '>
                {name}
            </div>

            <div className='w-[100%] flex justify-between items-center'>
                <div className='text-lg text-green-500 font-bold '>Rs {price}/-</div>
                <div className='flex justify-center items-center gap-[8px] text-green-500 text-lg font-semibold '>{type== "Veg" ?<LuLeafyGreen/>:<GiChickenOven />} <span>{type}</span></div>
            </div>

            <div>
                <button className={`w-full p-3 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all cursor-pointer `} onClick={()=>toast.success("Item added")} >Add to Cart</button>
            </div>


    </div>
  )
}

export default Card