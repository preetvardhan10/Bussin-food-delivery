import React, { useContext, useEffect } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { TbPaperBag } from "react-icons/tb";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import bussin from '../assets/bussin.avif'

function Nav() {
    let {input,setInput,cate,setCate,showCart,setShowCart} = useContext(dataContext)
    useEffect(()=>{
        let newList = food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
        setCate(newList)
    },[input])
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'> 
        <div className='w-[150px] h-[60px] bg-white flex justify-center items-center rounded-md  ' >
        <img src={bussin} className='w-full font-bold  overflow-auto rounded-md' />
        </div>

        <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={((e)=>{e.preventDefault()})}  >
        <IoSearchSharp className='text-green-500 w-[20px] h-[20px] rounded-md shadow-xl'  />
        <input type='text' placeholder='Search food....' className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
        </form>

        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{setShowCart(true)}}>
            <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>0</span>
        <TbPaperBag className='w-[30px] h-[30px] text-green-500' />
        </div>
    </div>
  )
}

export default Nav
