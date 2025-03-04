import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartSlice'
const Cart = () => {
  const {cart}=useSelector((state)=>state)
  const [totalAmount,setTotalAmount]=useState();
  const dispatch=useDispatch()
  function clickHandler() {
    cart.forEach(element => {
      dispatch(remove(element.id))
    });
    toast.success("checkout successful")
  }
  useEffect(()=>{
   setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0).toFixed(2)) 
  },[cart])
  return (
    <div >
      {
        cart.length > 0?
        (
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center '>
          
          <div className='w-[100%] md:w-[60%] flex flex-col p-2' >
            {
              cart.map((item)=>(
                <CartItem item={item} key={item.id}/>
              ))
            }
          </div>
          
          <div className='w-[100%] md:w-[40%] mt-5  flex flex-col justify-start'>

            <div className='flex flex-col p-5 pl-0 gap-5 my- mt-3 justify-between items-start'>
              <div className='font-semibold text-xl text-green-800 '>Your Cart</div>
              <div className='font-semibold text-5xl text-green-700  -mt-5'>Summary</div>
              <p className='text-xl'>
                Total Items: <span className='text-gray-700 font-semibold text-xl'>{cart.length}</span>
              </p>
              </div>
            <div className='flex flex-col'>
              <p className='text-xl font-bold'>Total Amount: <span className='text-gray-700 font-semibold'>${totalAmount}</span></p>
              <button
              onClick={clickHandler}
               className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl hover:cursor-pointer'>CheckOut Now</button>
            </div>

          </div>

        </div>
        ):
        (
            <div className='flex justify-center items-center flex-col w-full min-h-[80vh] gap-5'>

              <h1 className='text-gray-700 font-semibold text-2xl'>cart empty!</h1>

              <Link to='/'>
                <button className='bg-green-600 uppercase rounded-lg text-white p-3 px-10 font-semibold hover:bg-purple-50 hover:text-green-700 border-2 border-green-600 transition ease-in-out duration-300 hover:cursor-pointer tracking-wider'>Shop Now</button>
              </Link>

             </div>
          )
      }
    </div>
  )
}
export default Cart