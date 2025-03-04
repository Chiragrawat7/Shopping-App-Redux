import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Card from '../components/Card';
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(true);
    const [posts,setPosts]=useState([]);
    async function fetchData() {
        setLoading(true);
        try{
            const res=await fetch(API_URL);
            const data =await res.json()
            setPosts(data);
            setLoading(false);
        }
        catch(e){
            alert("error while Fetching Data")
            setPosts([])
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='flex justify-center items-center'>
        {
           loading?<Spinner/>:
           posts.length > 0 ?
           (
           <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
            {
                posts.map(post=>(
                    <Card key={post.id} post={post}/>
                ))
            }
           </div>
           ):<p >No Data Available</p>
        }
    </div>
  )
}

export default Home