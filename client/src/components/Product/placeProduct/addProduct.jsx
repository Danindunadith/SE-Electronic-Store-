import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./addProduct.css";
import axios from "axios";
import toast from 'react-hot-toast';
//import Swal from 'sweetalert2';


const AddProduct = () => {

    const products = {
        name:"",
        category:"",
        price:"",
        stock:"",
        description:"",
        quantity:"",
    }

    const [product, setProduct] = useState(products);
    const navigate = useNavigate();

    const inputHandler = (e) =>{
        const {name, value} = e.target;
        setProduct({...product, [name]:value});
        
        
    }

    const submitForm = async(e) =>{
       e.preventDefault();
       await axios.post("http://localhost:8000/api/products/createp",product)
       .then((response)=>{
        toast.success(response.data.msg, {position:"top-right"} )
        /*Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });*/
        navigate("/viewproduct")
       }).catch(error => console.log(error))
        
    }
    return (
        <div className='addOrder'>
            <Link to={"/viewproduct"}>Back</Link>
            <h3>Add New Product</h3>
            <form className='addOrderForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">Product Name</label>
                    <input type="text" onChange={inputHandler}  id="name" name="name" autoComplete='off' placeholder='Enter Product Name' />
                </div>

                <div className="inputGroup">
                    <label htmlFor="category">Category</label>
                    <select onChange={inputHandler} id="category" name="category">
                        <option value="">Select Category</option>
                        <option value="Mobile Phones">Mobile Phones</option>
                        <option value="Computers">Computers</option>
                        <option value="Household apliances">Household apliances</option>
                        <option value="Lights & Decorations">Lights & Decorations</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="inputGroup">
                    <label htmlFor="brand">Price</label>
                    <input type="text" onChange={inputHandler} id="price" name="price" autoComplete='off' placeholder='Enter Price' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="brand">Stock</label>
                    <input type="text" onChange={inputHandler} id="stock" name="stock" autoComplete='off' placeholder='How many' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="quantity">Description</label>
                    <input type="quantity" onChange={inputHandler} id="description" name="description" autoComplete='off' placeholder='Enter Description' />
                </div>

                <div className="inputGroup">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="quantity" onChange={inputHandler} id="quantity" name="quantity" autoComplete='off' placeholder='Quantity' />
                </div>




                <div className="inputGroup">
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct