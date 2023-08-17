/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState(' ')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/spots/1'
    const handleLogin = event => {
        event.preventDefault();
        setError(' ')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add atleast one upper case');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add atleast 2 numbers');
            return;
        }
        else if (password.length < 6) {
            setError('Please add atleast 6 characters in your password');
            return;
        }



        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                setError(' ')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })

    }


    return (
        <div style={{ height: '100vh', width: '100%' }} className='flex justify-center items-center'>
            <div style={{ border: '1px solid #ABABAB', backgroundColor: '#fffff' }} className='p-5 rounded-md'>

                <h2 className='text-2xl text-black font-semibold mb-4'>Login</h2>
                <form onSubmit={handleLogin} >
                    <input className='w-96 h-14 mb-4 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="email" name='email' placeholder='Your Email' required />
                    <br />
                    <input className='w-96 h-14 mb-2 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="password" name='password' placeholder='Password' required />

                    {/* set error message  */}
                    <p className='text-red-500'>{error}</p>
                    <input className='bg-orange-400 hover:bg-orange-500 py-4 mt-6  w-96 rounded-lg text-black font-medium text-xl' type="submit" value="Login" />
                </form>
                <div className='flex justify-center'>
                    <p>Don{`'`}t have an account? <Link to='/register' className='text-orange-500'>Create an account</Link>   </p>
                </div>



            </div>
        </div>
    );
};

export default Login;