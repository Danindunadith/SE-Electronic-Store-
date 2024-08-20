import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./addOrder.css";
import axios from "axios";
import toast from 'react-hot-toast';
//import Swal from 'sweetalert2';


const AddOrder = () => {

    const orders = {
        name:"",
        category:"",
        brand:"",
        model:"",
        quantity:"",
    }

    const [order, setOrder] = useState(orders);
    const navigate = useNavigate();

    const inputHandler = (e) =>{
        const {name, value} = e.target;
        setOrder({...order, [name]:value});
        
        
    }

    const submitForm = async(e) =>{
       e.preventDefault();
       await axios.post("http://localhost:8000/api/users/create",order)
       .then((response)=>{
        toast.success(response.data.msg, {position:"top-right"} )
        /*Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });*/
        navigate("/order")
       }).catch(error => console.log(error))
        
    }
    return (
        <div className='addOrder'>
            <Link to={"/"}>Back</Link>
            <h3>Place Orders</h3>
            <form className='addOrderForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">Order ID</label>
                    <input type="text" onChange={inputHandler}  id="name" name="name" autoComplete='off' placeholder='Enter Id' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="category">User's name</label>
                    <input type="text" onChange={inputHandler} id="category" name="category" autoComplete='off' placeholder='Enter full name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="brand">Date</label>
                    <input type="date" onChange={inputHandler} id="brand" name="brand" autoComplete='off' placeholder='Date' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="model">Status</label>
                    <select onChange={inputHandler} id="model" name="model">
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="quantity" onChange={inputHandler} id="quantity" name="quantity" autoComplete='off' placeholder='Quantity' />
                </div>
                <div className="inputGroup">
                    <button type="submit">Submit Order</button>
                </div>
            </form>
        </div>
    )
}

export default AddOrder