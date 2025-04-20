import React, { useContext, useState } from 'react'
import Nav from "../components/Nav.jsx"
import categories from '../Category.jsx'
import Card from '../components/Card.jsx'
import { food_items } from '../food.js'
import { dataContext } from '../context/UserContext.jsx'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2.jsx'
import { toast } from 'react-toastify'

function Home() {
    let {cate,setCate,input,showCart,setShowCart} = useContext(dataContext)

    function filter(category){
        if(category=="ALL"){
            setCate(food_items)
        }else{
            let newList = food_items.filter((item)=>(item.food_category === category))
            setCate(newList)
        }
    }

    // let subtotal = items.reduce((total,item)=>total+item.price,0)
    let subtotal = 1099
    console.log(subtotal)
    let deliveryFee = 20
    let taxes = Math.round(subtotal*(0.5/100))
    let total = Math.floor(subtotal+deliveryFee+taxes)

  return (
    <div className='bg-white w-full min-h-screen'>
{/* Navigation bar code here */}
        <Nav/>


{/* category bar and function code here */}
        {!input?
        <div className='flex flex-wrap justify-center gap-5 w-[100%]'>
        {categories.map((item)=>{
            return<div className='w-[140px] h-[140px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:scale-95 transform' onClick={()=>filter(item.name)}>
                {item.icon}
                {item.name}
            </div>
            })}
    </div>:null
        }


{/* {Food cards code here} */}
        <div className='w-full flex flex-wrap gap-5 p-5 justify-center items-center pt-8 p'>
            {cate.map((item)=>{
                return <Card name={item.food_name} price={item.price} id={item.id} category={item.food_category} type={item.food_type} image={item.food_image}  />
            })}
        </div>


{/* Cart page is made here */}
        <div className= {`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex  flex-col items-center overflow-auto ${showCart?"translate-0":"translate-full" } `} >
            <header className='w-full flex justify-between items-center  '>
                <span className='text-green-400 text-[18px] font-semibold '>Order Items</span>
                <RxCross2 className='text-green-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer hover:text-gray-600 ' onClick={()=>{setShowCart(false)}} />
            </header>
            <Card2/>
            <Card2/>
            <Card2/>
  

            <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8'>
                <div className='w-full flex justify-between items-center '>
                    <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
                    <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>
                </div>
                <div className='w-full flex justify-between items-center '>
                    <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
                    <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
                </div>
                <div className='w-full flex justify-between items-center '>
                    <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                    <span className='text-green-400 font-semibold text-lg'>Rs{taxes}/-</span>
                </div>

            </div>
            <div className='w-full flex justify-between items-center p-9 '>
                    <span className='text-2xl text-gray-600 font-semibold'>Total</span>
                    <span className='text-green-400 font-semibold text-2xl'>Rs{total}/-</span>
            </div>
            <button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all' onClick={()=>toast.success("Order Placed")}>Place Order</button>
            
        </div>



    </div>
  )
}

export default Home
