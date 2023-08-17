/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState(' ')
    const { createUser } = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();
        setError(' ')
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const fullname = firstName + ' ' + lastName;
        if (!(password === confirm)) {
            setConfirmPass('Password did not matched')
            return
        }
        else {
            setConfirmPass('')
        }
        //  validate 
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
        createUser(email, password, firstName)
            .then(result => {
                const createdUser = result.user;
                form.reset();
                setError(' ')
                toast.success('User created succesfully ')
                console.log(createdUser)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div style={{ height: '100vh', width: '100%' }} className='flex justify-center items-center'>
            <div style={{ border: '1px solid #ABABAB' }} className='p-5 rounded-md'>

                <h2 className='text-2xl text-black font-semibold mb-4'>Create an account</h2>
                <form onSubmit={handleRegister} >
                    <input className='w-96 h-14 mb-4 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="text" name='firstName' placeholder='First Name' required />
                    <br />
                    <input className='w-96 h-14 mb-4 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="text" name='lastName' placeholder='Last Name' required />
                    <br />
                    <input className='w-96 h-14 mb-4 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="email" name='email' placeholder='Email' required />
                    <br />
                    <input className='w-96 h-14 mb-4 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="password" name='password' placeholder='Password' required />
                    <br />
                    <input className='w-96 h-14 mb-4 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="password" name='confirm' placeholder='Confirm Password' required />
                    <br />
                    {/* set error message  */}
                    <p className='text-red-500'>{confirmPass}</p>

                    <input className='bg-orange-400 hover:bg-orange-500 py-4 mt-6  w-96 rounded-lg text-black font-medium text-xl' type="submit" value="Create an account" />




                </form>

                <div className='flex justify-center'>
                    <div>
                        <p>Already an account?<Link to='/login' className='text-orange-500 mb-2'>Login</Link>   </p>
                        {/* set error message  */}
                        <p className='text-red-500'>{error}</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Register;