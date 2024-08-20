import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditProduct = () => {

    const products = {
        name: "",
        category:"",
        price: "",
        stock: "",
        description: "",
        quantity:""
    }

    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(products);

    const inputChangeHandler = (e) =>{
        const {name, value} = e.target;
        setProduct({...product, [name]:value});
        console.log(product);
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/getoneproduct/${id}`)
        .then((response)=>{
            setProduct(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])

    const submitForm = async(e)=>{
        e.preventDefault();
       await axios.put(`http://localhost:8000/api/products/updateproduct/${id}`,product)
       .then((response)=>{
        toast.success(response.data.msg, {position:"top-right"} )
        navigate("/viewproduct")
       }).catch(error => console.log(error))
    }

    return (
        <div className='addOrder'>
            <Link to={"/viewproduct"}>Back</Link>
            <h3>Edit Product</h3>
            <form className='addOrderForm' onSubmit={submitForm} >
                <div className="inputGroup">
                    <label htmlFor="brand">Name</label>
                    <input type="text" value={product.name} onChange={inputChangeHandler} id="name" name="name" autoComplete='off' placeholder='Enter Name' />
                </div>
                <div className="inputGroup">
                <label htmlFor="brand">category</label>
                <select onChange={inputChangeHandler} id="category" name="category" value={product.category}>
                        <option value="">Select Category</option>
                        <option value="PeMobile Phonesnding">Mobile Phones</option>
                        <option value="Computers">Computers</option>
                        <option value="Household apliances">Household apliances</option>
                        <option value="Lights & Decorations">Lights & Decorations</option>
                        <option value="Other">Other</option>
                    </select>

                    </div>
                <div className="inputGroup">
                    <label htmlFor="quantity">Price</label>
                    <input type="quantity" value={product.price} onChange={inputChangeHandler} id="price" name="price" autoComplete='off' placeholder='Enter Price' />
                </div>

                <div className="inputGroup">
                    <label htmlFor="quantity">Stock</label>
                    <input type="quantity" value={product.stock} onChange={inputChangeHandler} id="stock" name="stock" autoComplete='off' placeholder='Stock size' />
                </div>

                <div className="inputGroup">
                    <label htmlFor="quantity">Description</label>
                    <input type="quantity" value={product.description} onChange={inputChangeHandler} id="description" name="description" autoComplete='off' placeholder='Enter Litte description' />
                </div>

               






                <div className="inputGroup">
                    <button type="submit">Edit This Item</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct