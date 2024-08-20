import React from "react";
import Order from "../components/RetrieveOrder/Order";

const Events = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}
        >
            <Order/>
        </div>
    );
};

export default Events;