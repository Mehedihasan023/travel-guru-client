/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../shared/Navigation';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const HotelsLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default HotelsLayout;