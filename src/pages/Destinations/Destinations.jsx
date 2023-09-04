/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import ActiveNav from '../../shared/ActiveNav/ActiveNav';

const Destinations = ({ spot}) => {
    const { image, id, description,name } = spot;
    return (  
            <NavLink to={`/spots/${!id? 1:id}`}  
            className={({ isActive }) =>
                isActive
                    ? "bg-orange-400 rounded-xl p-1"
                    : "bg-slate-400 rounded-xl p-1"
            }
            > <div >

                    <div className="relative">
                        <img style={{height:"314px"}} className='md:w-96 w-56 rounded-xl' src={image} alt="" />
                        <div className="absolute top-3/4">
                            <h2 className="text-White pl-8"><span className='text-white md:text-4xl 
                            text-2xl font-bold'>{name}</span></h2>

                        </div>
                    </div>
                </div>
            </NavLink>
    );
};

export default Destinations;