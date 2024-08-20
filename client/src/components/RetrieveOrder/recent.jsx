import React, { useEffect, useState } from "react";
import "./recent.css";

import axios from "axios";


const Orderrecent = () => {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/users/getall");
            setOrders(response.data);
        }

        fetchData();
    }, []);

  

    
    const filteredOrders = orders.filter((order) =>
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
        order.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='OrderTable'>
            
            <h3>Recent Order List</h3>

            
            

            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User's Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order, index) => (
                        <tr key={order._id}>
                            <td>{order.name}</td>
                            <td>{order.category}</td>
                            <td>{order.brand}</td>
                            <td>{order.model}</td>
                            
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orderrecent;
