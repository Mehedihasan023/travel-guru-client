/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SpotDetails = () => {
    const [details,setDetails]=useState({});
    let {id} = useParams();
    if (!id) {
        id = 1;
    }
// console.log(details)
 useEffect(()=>{
     fetch(`https://travel-guru-server-mehedihasan023.vercel.app/spots/${id}`)
     .then(res=> res.json())
     .then(data=> setDetails(data))
 },[id])


     return (
         <div className='w-full text-left'>
             <h1 className='text-6xl font-semibold text-white mb-7'>{details.name}</h1>
             <p className='text-white w-10/12'>{details.description?.slice(0, 280)}</p>
            
             <Link to={`/destination/spots/${id}`}>
                 <button className='bg-orange-500 px-3 py-2 text-2xl rounded-xl mt-4 hover:bg-orange-600 '>Booking</button>

             </Link>
         </div>
     );

    
};

export default SpotDetails;