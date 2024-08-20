import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #f8f9fa; /* Light background for a professional look */
    height: 70px; /* Adjust height for a sleeker appearance */
    display: flex;
    justify-content: center; /* Center the navigation bar */
    align-items: center; /* Vertically align items */
    padding: 0 20px; /* Add some padding on the sides */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #333; /* Dark color for text */
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem; /* Increase padding for better spacing */
    height: 100%;
    cursor: pointer;
    font-weight: 500; /* Slightly bolder text */
    transition: color 0.2s ease-in-out;
    &.active {
        color: #007bff; /* Highlight active link */
        font-weight: 700; /* Make active link bolder */
    }
    &:hover {
        color: #0056b3; /* Change color on hover */
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #333;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    justify-content: space-between; /* Space items evenly */
    align-items: center;
    width: 100%; /* Use full width */
    max-width: 800px; /* Restrict max width for a more controlled layout */
    /* Additional styling for responsiveness */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #007bff;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        background: #0056b3;
        color: #fff;
    }
`;
