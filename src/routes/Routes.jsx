/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Destinations from '../pages/Destinations/Destinations';
import SpotDetails from '../pages/SpotDetails/SpotDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:  <Navigate to='/spots/1'></Navigate>
            },
            {
                path: '/spots/:id',
                element: <SpotDetails></SpotDetails>
            }

        ]
    },
]);

export default router;