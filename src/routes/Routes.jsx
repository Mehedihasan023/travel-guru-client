/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Destinations from '../pages/Destinations/Destinations';
import SpotDetails from '../pages/SpotDetails/SpotDetails';
import Destination from '../layouts/Destination';
import Booking from '../pages/Booking/Booking';
import HotelsLayout from '../layouts/HotelsLayout';
import Hotels from '../pages/Hotels/Hotels';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to='spots/1'></Navigate>
            },
            {
                path: '/spots/:id',
                element: <SpotDetails></SpotDetails>
            }

        ]
    },
    {
       path:'/destination',
       element:<Destination></Destination>,
       children:[
           {
               path: '/destination',
               element: <Navigate to='/destination/spots/1'></Navigate>
           },
           {
               path:'/destination/spots/:id',
               element: <PrivateRoute><Booking></Booking></PrivateRoute>
          }
       ]

    },
    {
        path:'/',
        element:<HotelsLayout></HotelsLayout>,
        children:[
            {
                path:'destination/spots/:id/hotels',
                element:<Hotels></Hotels>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
]);

export default router;