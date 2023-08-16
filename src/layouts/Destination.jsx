/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Destination = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Destination;