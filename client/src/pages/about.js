// pages/about.js

import React from "react";

import Dashboard from "../components/Dashboard";
import Orderrecent from "../components/RetrieveOrder/recent";
import RecentProduct from "../components/Product/RetrieveUser/recentproduct";

const About = () => {
    return (
        <div
             
        >
           <Dashboard/>
           <Orderrecent/>
           <RecentProduct/>
        </div>
    );
};

export default About;