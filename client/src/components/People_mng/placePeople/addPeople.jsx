import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./addPeople.css";
import axios from "axios";
import toast from 'react-hot-toast';

const AddPeople = () => {

    const initialPeopleState = {
        name: "",
        email: "",
        number: "",
        address: "",
    };

    const [people, setPeople] = useState(initialPeopleState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setPeople({ ...people, [name]: value });
    }

    const validate = () => {
        const newErrors = {};
        if (!people.name) newErrors.name = "Name is required";
        if (!people.email) newErrors.email = "Email is required";
        if (!people.number) newErrors.number = "Contact Number is required";
        if (!people.address) newErrors.address = "Address is required";
        return newErrors;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            await axios.post("http://localhost:8000/api/peoples/createpeo", people)
                .then((response) => {
                    toast.success(response.data.msg, { position: "top-right" });
                    navigate("/people");
                }).catch(error => console.log(error));
        }
    }

    return (
        <div className='addOrder'>
            <Link to={"/people"}>Back</Link>
            <h3>Add User</h3>
            <form className='addOrderForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">User's name</label>
                    <input type="text" onChange={inputHandler} id="name" name="name" autoComplete='off' placeholder='Full name' />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="number">Contact Number</label>
                    <input type="text" onChange={inputHandler} id="number" name="number" autoComplete='off' placeholder='Contact Number' />
                    {errors.number && <span style={{ color: 'red' }}>{errors.number}</span>}
                </div>
                <div className="inputGroup">
                    <label htmlFor="address">Address</label>
                    <input type="text" onChange={inputHandler} id="address" name="address" autoComplete='off' placeholder='Address' />
                    {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                </div>
                <div className="inputGroup">
                    <button type="submit">Add To System</button>
                </div>
            </form>
        </div>
    )
}

export default AddPeople;
