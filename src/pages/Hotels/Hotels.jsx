/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotelDetails, setHotelDetails] = useState([]);
    const [destinationName, setDestinationName] = useState({})
    let { id } = useParams();
    if (!id) {
        id = 1;
    }
    useEffect(() => {
        fetch(`https://travel-guru-server-mehedihasan023.vercel.app/spots/${id}/hotels`)
            .then(res => res.json())
            .then(data => setHotelDetails(data))
    }, [id])
    useEffect(() => {
        fetch(`https://travel-guru-server-mehedihasan023.vercel.app/spots/${id}`)
            .then(res => res.json())
            .then(data => setDestinationName(data))
    }, [id])

    return (
        <div style={{ height: '100vh' }} className='' >

            <div className='flex justify-center items-center h-11/12 w-full'>
                <div className='mt-44 md:flex md:justify-between'>
                    <div className='h-5/6 overflow-y-scroll'>
                        <h2 className=' font-semibold mb-4 md:ml-0 ml-24'>Stay in {destinationName?.name}</h2>
                        {
                            hotelDetails.map(hotel => <Hotel
                                key={hotel.id}
                                hotel={hotel}
                            >
                            </Hotel>
                            )
                        }
                    </div>
                    <div>
                        {/* google map */}
                        <iframe className='md:ml-24' style={{ width: '500px', height: '740px', border: '0' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.85144869977!2d91.91866925834812!3d21.450298881975534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1692304134439!5m2!1sen!2sbd" loading="lazy" ></iframe>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hotels;