import React, { useEffect, useState } from "react";
import "./order.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/users/getall");
            setOrders(response.data);
        }

        fetchData();
    }, []);

    const deleteOrder = async (orderId) => {
        await axios.delete(`http://localhost:8000/api/users/delete/${orderId}`)
            .then((response) => {
                setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
                toast.success(response.data.msg, { position: 'top-right' });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    
    const filteredOrders = orders.filter((order) =>
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
        order.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='OrderTable'>
            <Link to={"/add"} className='addButton'>Place Orders</Link>
            <div className="head">
            <h3>Orders List</h3>
            </div>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search by Order ID, User's name, etc."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchInput"
            />


          <div className="oRderclass">
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User's Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Edit Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order, index) => (
                        <tr key={order._id}>
                            <td>{order.name}</td>
                            <td>{order.category}</td>
                            <td>{order.brand}</td>
                            <td>{order.model}</td>
                            <td className='actionButtons'>
                                <Link to={`/edit/` + order._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                            </td>
                            <td className='actionButtons'>
                                <button onClick={() => deleteOrder(order._id)}><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
         </div>
        </div>
    );
};

export default Order;
