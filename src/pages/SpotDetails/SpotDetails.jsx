/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpotDetails = () => {
    const [details,setDetails]=useState({});
    let {id} = useParams();
    if (!id) {
        id = 1;
    }
console.log(details)
 useEffect(()=>{
     fetch(`https://travel-guru-server-mehedihasan023.vercel.app/spots/${id}`)
     .then(res=> res.json())
     .then(data=> setDetails(data))
 },[id])


     return (
         <div className='w-4/12 text-left'>
             <h1 className='text-6xl font-semibold text-white mb-7'>{details.name}</h1>
             <p className='text-white w-10/12'>{details.description?.slice(0, 200)}</p>
             <button className='bg-orange-500 px-3 py-2 text-2xl rounded-xl mt-4 hover:bg-orange-600 '>Booking</button>
         </div>
     );

    
};

export default SpotDetails;