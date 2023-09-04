/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
const Hotel = ({ hotel }) => {
    const { image, name, number_of_baths, number_of_bedrooms, number_of_beds, number_of_guests, price_per_night, ratings, ratings_number, total_price, facilities } = hotel;


    return (
        <div className='md:w-full mb-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='md:w-72 md:h-56 w-72 h-auto' src={image} alt="Album" /></figure>
                <div className=" md:w-full w-10/12 md:px-5 md:py-6 px-2 py-3 text-start">
                    <h2 className=" md:text-start font-bold text-xl md:ml-0 ml-24">{name}</h2>
                    <span className='text-gray-500 flex md:justify-start md:ml-0 ml-24'>
                        <small className='mr-1'>{number_of_guests} guests</small>
                        <small className='mr-1'>{number_of_bedrooms} bedrooms</small>
                        <small className='mr-1'>{number_of_beds} beds</small>
                        <small>{number_of_baths} baths</small>
                    </span>
                    <small className='flex md:justify-start md:ml-0 ml-24'> 
                    <div>
                            <p>{facilities[0]}</p>
                            <p>{facilities[1]}</p>
                            <p>{facilities[2]}</p>
                    </div>
                    </small>
                    <small className='flex justify-between md:ml-0 ml-24 '>
                        <p className='flex'><FaStar className='text-orange-400 mt-1' /> {ratings} ({ratings_number})</p>
                        <p className='text-gray-400'><span className='text-black'>${price_per_night}/</span>night <span>${total_price} total</span></p>
                    </small>

                </div>
            </div>
        </div>
    );
};

export default Hotel;