import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <h2>
                        <NavLink
                            to='users'
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Users
                        </NavLink>
                    </h2>
                </li>
                <li>
                    <h2>
                        <NavLink
                            to='search'
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Search
                        </NavLink>
                    </h2>
                </li>
            </ul>
        </nav>
    );
}
