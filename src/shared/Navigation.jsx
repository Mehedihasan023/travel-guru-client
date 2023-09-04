/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ActiveNav from './ActiveNav/ActiveNav';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../pages/providers/AuthProvider';
const Navigation = () => {
    const { user, logOut } = useContext(AuthContext);
    const userName = user?.displayName;
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }



    return (
        <div>
            <div className='absolute top-3 left-5 right-5 w-10/12 mx-auto'>
                <div className=''>
                    <div className='mt-8 flex justify-between items-center'>
                        <div className='md:block hidden'>
                            <img className='w-28 h-14' src={logo} alt="" />
                        </div>
                        <div className='flex items-center'>
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


                            {
                                user ? <><button onClick={handleLogOut} className='rounded-lg p-2 text-black mr-5'>Logout</button><p className='text-black font-semibold'>{userName}</p></> :

                                    <NavLink to='/login'
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-orange-400 rounded-lg p-2 text-white mr-5"
                                                : "rounded-xl mr-5 text-black"
                                        }>
                                        Login
                                    </NavLink>

                            }


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navigation;