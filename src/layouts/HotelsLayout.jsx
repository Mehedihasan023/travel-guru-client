/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../shared/Navigation';
import { Outlet } from 'react-router-dom';

const HotelsLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default HotelsLayout;