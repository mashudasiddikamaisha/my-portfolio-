import React from 'react';
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className="navbar bg-blue-50/80 backdrop-blur-md shadow-md px-4 md:px-8 lg:px-16 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="navbar-start">
                    <a className="text-xl md:text-2xl font-bold text-blue-600">Maisha.dev</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-blue-700 font-medium text-lg">
                        <li><a className="hover:text-blue-500">Home</a></li>
                        <li><a className="hover:text-blue-500">About</a></li>
                        <li><a className="hover:text-blue-500">Skills</a></li>
                        <li><a className="hover:text-blue-500">Projects</a></li>
                        <li><a className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost text-blue-600 text-2xl">
                        <FaBarsStaggered />
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-blue-50 rounded-box w-52 text-blue-700 font-medium">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;