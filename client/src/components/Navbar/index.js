// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/about" >
                        DashBoard
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Orders
                    </NavLink>
                    <NavLink to="/annual" activeStyle>
                        Products
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        Users
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Reports
                    </NavLink>
                   
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar;