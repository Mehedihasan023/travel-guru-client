/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotelDetails, setHotelDetails] = useState([]);
    let { id } = useParams();
    if (!id) {
        id = 1;
    }
    useEffect(() => {
        fetch(`https://travel-guru-server-mehedihasan023.vercel.app/spots/${id}/hotels`)
            .then(res => res.json())
            .then(data => setHotelDetails(data))
    }, [id])

    // console.log(hotelDetails)
     
    return (
        <div style={{ height: '100vh' }} className='bg-slate-100' >

            <div className='md:grid md:grid-cols-2 md:gap-4 md:absolute md:top-1/4 md:left-24'>
                <div className='h-11/12 overflow-y-scroll'>
                    {
                        hotelDetails.map(hotel => <Hotel
                            key={hotel.id}
                            hotel={hotel}
                        >
                        </Hotel>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Hotels;