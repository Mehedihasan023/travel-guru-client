/* eslint-disable no-unused-vars */
import React from 'react';
import ActiveNav from './ActiveNav/ActiveNav';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <div className='absolute top-3 left-5 right-5 w-10/12 mx-auto'>
                <div className=''>
                    <div className='mt-8 flex justify-between items-center'>
                        <div>
                            <img className='w-28 h-14' src={logo} alt="" />
                        </div>
                        <div>
                            <NavLink to='/spots/1'
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-400 rounded-lg p-2 text-white mr-5" 
                                        : "rounded-xl mr-5 text-black"
                                }>
                                Home
                            </NavLink>
                            <NavLink to='/destination'
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-400 rounded-lg p-2 text-white mr-5" 
                                        : "rounded-xl mr-5 text-black"
                                }>
                                Destination
                            </NavLink>
                            <NavLink to='/login'
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-400 rounded-lg p-2 text-white mr-5" 
                                        : "rounded-xl mr-5 text-black"
                                }>
                                Login
                            </NavLink>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navigation;