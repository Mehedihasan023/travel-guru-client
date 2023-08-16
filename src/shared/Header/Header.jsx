/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import ActiveNav from '../ActiveNav/ActiveNav';
const Header = () => {
    return (
        <div className='absolute top-3 left-5 right-5 w-10/12 mx-auto'>
        <div className=''>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <img className='w-28 h-14' src={logo} alt="" />
                    </div>
                    <div>
                        <ActiveNav to='/spots/1'>Home</ActiveNav>
                        <ActiveNav to='/destination'>Destination</ActiveNav>
                        <ActiveNav to='/login'>Login</ActiveNav>
                    </div>
                </div>
        </div>
            
        </div>
     
    );
};

export default Header;