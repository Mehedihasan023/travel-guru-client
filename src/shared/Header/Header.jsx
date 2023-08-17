/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import ActiveNav from '../ActiveNav/ActiveNav';
import { AuthContext } from '../../pages/providers/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const userName = user?.displayName;

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }



    return (
        <div className='absolute top-3 left-5 right-5 w-10/12 mx-auto'>
            <div className=''>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <img className='w-28 h-14' src={logo} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <ActiveNav to='/spots/1'>Home</ActiveNav>
                        <ActiveNav to='/destination'>Destination</ActiveNav>

                        {
                            user ? <>
                                <button onClick={handleLogOut} className='rounded-lg p-2 text-white mr-5'>Logout</button> <p className='text-white font-semibold'>{userName}</p>
                            </>

                                :
                                <ActiveNav to='/login'>Login</ActiveNav>
                        }
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Header;