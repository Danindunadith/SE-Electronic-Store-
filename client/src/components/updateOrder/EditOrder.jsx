import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../placeOrder/addOrder.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditOrder = () => {

    const orders = {
        brand: "",
        model: "",
        quantity: ""
    }

    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(orders);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/getOne/${id}`)
            .then((response) => {
                setOrder(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/users/update/${id}`, order)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-right" })
                navigate("/order")
            }).catch(error => console.log(error))
    }

    return (
        <div className='addOrder'>
            <Link to={"/order"}>Back</Link>
            <h3>Edit Order Status</h3>
            <form className='addOrderForm' onSubmit={submitForm} >
                
                <div className="inputGroup">
                    <label htmlFor="model">Status</label>
                    <select onChange={inputChangeHandler} id="model" name="model" value={order.model}>
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>
                
                <div className="inputGroup">
                    <button type="submit">Edit Orders</button>
                </div>
            </form>
        </div>
    )
}

export default EditOrder;
