/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
    const [details, setDetails] = useState({});
    const [selectedFromDate, setSelectedFromDate] = useState(null);
    let [selectedToDate, setSelectedToDate] = useState(null);
    let { id } = useParams();
    if (!id) {
        id = 1;
    }
    // console.log(details)
    useEffect(() => {
        fetch(`https://travel-guru-server-mehedihasan023.vercel.app/spots/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const location = form.location.value;
        console.log(location)
    }

    const handleFromDateChange = (date) => {
        setSelectedFromDate(date);
    };
    const handleToDateChange = (date) => {
        setSelectedToDate(date);
    };

    return (
        <div className='background'>

            <div className='background-color '>

                {/* details and form part starts here */}
                <div className='md:grid md:grid-cols-2 md:gap-4 md:absolute absolute md:top-1/4 top-24 md:left-64 left-0'>

                    <div>
                        <div className='md:w-8/12 w-11/12 text-start md:ml-10 ml-5'>
                            <h1 className='md:text-6xl text-2xl font-semibold text-white mb-7'>{details?.name}</h1>
                            <p className='text-white md:w-10/12 w-full md:mb-0 mb-4'>{details?.description}</p>
                        </div>
                    </div>
                    <div className='md:ml-5 ml-0'>
                        <form onSubmit={handleBooking} style={{ background: '#FFF', paddingLeft: '16px', width: '420px', paddingTop: '15px', paddingBottom: '15px', borderRadius: '6px' }}>
                            <label style={{ color: '#818181' }} className=' text-lg'> Origin</label>
                            <br />
                            <input className='w-96 h-14 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="text" name='location' placeholder='Dhaka' required />
                            <br />
                            <label style={{ color: '#818181' }} className=' text-lg'> Destination</label>
                            <br />
                            <input className='w-96 h-14 rounded-md text-black font-medium text-xl pl-4' style={{ background: '#F2F2F2' }} type="text" name='destination' value={details?.name} />

                            <div className='flex justify-between w-52' >
                                <div className='w-2'>
                                    <h2 className='text-lg' style={{ color: '#818181' }}>From</h2>
                                    <DatePicker className=' h-14 rounded-md text-black font-medium text-sm pl-2 bg-gray-100'
                                        selected={selectedFromDate}
                                        onChange={handleFromDateChange}
                                        placeholderText="17/8/2023"
                                        dateFormat="dd/MM/yyyy" // Customize date format
                                        isClearable
                                    />
                                </div>
                                <div className='w-2'>
                                    <h2 className='text-lg' style={{ color: '#818181' }}>To</h2>
                                    <DatePicker style={{ background: '#F2F2F2' }} className=' h-14 rounded-md text-black font-medium text-sm pl-4 bg-gray-100'
                                        selected={selectedToDate}
                                        onChange={handleToDateChange}
                                        placeholderText="31/9/2023"
                                        dateFormat="dd/MM/yyyy" // Customize date format
                                        isClearable
                                    />
                                </div>

                            </div>
                            
                                {
                                    selectedToDate && selectedFromDate ? <>
                                    <Link to={selectedToDate ? `/destination/spots/${id}/hotels` : ''}>
                                        <input className='bg-orange-400 hover:bg-orange-500 py-6 mt-6  w-96 rounded-lg text-black font-medium text-xl' type="submit" value="Start Booking" />
                                    </Link>
                                    </>:
                                    <>
                                    <p>Select date to start booking</p>
                                        <input className='bg-orange-400 hover:bg-orange-500 py-6 mt-6  w-96 rounded-lg text-black font-medium text-xl' type="submit" value="Start Booking" />
                                    </>

                                }
                           
                          
                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Booking;