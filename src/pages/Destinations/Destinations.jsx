/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Destinations = ({ spot }) => {
    const { image, id, description,name } = spot;
    console.log(id)
    return (
        <div >
           
            <div className=" ">
                <img className='w-96 h-72 rounded-xl' src={image} alt="" />
                <div className="absolute top-3/4">
                    <h2 className="text-White pl-8"><span className='text-white text-4xl font-bold'>{name}</span></h2>
               
                </div>
            </div>
        </div>
    );
};

export default Destinations;