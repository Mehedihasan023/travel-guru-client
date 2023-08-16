/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from "react-router-dom";
const ActiveNav = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "bg-orange-400 rounded-lg p-2 text-white mr-5" :
                 "rounded-xl mr-5 text-white"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveNav;