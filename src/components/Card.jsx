import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";
const Card = ({ post }) => {
  // const [selected,setSelected]=useState(false);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    console.log("item added");
    toast.success("ïtem added to cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item removed");
  };
  const { cart } = useSelector((state) => state);
  return (
    <div
      className="flex flex-col items-center justify-between  shadow-sm border-2 border-slate-200 gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-2xl hover:shadow-slate-500 hover:drop-shadow-2xl hover:scale-110 transition-all duration-500"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate  w-40">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img className="h-full w-full" src={post.image} />
      </div>
      <div className="flex justify-between  w-full">
        <p className="text-green-600 font-semibold">${post.price}</p>
        <div>
          {
          cart.some((p) => p.id === post.id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in hover:cursor-pointer"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in hover:cursor-pointer"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
