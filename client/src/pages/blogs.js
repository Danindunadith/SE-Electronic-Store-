import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Blogs.css"; 
import Dashboardsecond from "../components/second";

const Blogs = () => {
    const [people, setPeople] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/peoples/getallpeople");
                setPeople(response.data);
            } catch (error) {
                console.error("Error fetching people data: ", error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/products/getallp");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products data: ", error);
            }
        };

        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/users/getall");
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders data: ", error);
            }
        };

        fetchPeople();
        fetchProducts();
        fetchOrders();
    }, []);

    const downloadPeoplePDF = () => {
        const doc = new jsPDF();
        doc.text("Users List", 20, 10);
        doc.autoTable({
            head: [['Name', 'Email', 'Contact Number', 'Address']],
            body: people.map(person => [person.name, person.email, person.number, person.address])
        });
        doc.save("users_list.pdf");
    };

    const downloadProductsPDF = () => {
        const doc = new jsPDF();
        doc.text("Products List", 20, 10);
        doc.autoTable({
            head: [['Name', 'Category', 'Price', 'Stock', 'Description']],
            body: products.map(product => [product.name, product.category, product.price, product.stock, product.description])
        });
        doc.save("products_list.pdf");
    };

    const downloadOrdersPDF = () => {
        const doc = new jsPDF();
        doc.text("Orders List", 20, 10);
        doc.autoTable({
            head: [['Order ID', 'User Name', 'Date', 'Status']],
            body: orders.map(order => [order.name, order.category, order.brand, order.model])
        });
        doc.save("orders_list.pdf");
    };

    return (
        <div className="blogs-container">
            <h1>Reports & Analytical Data</h1>
            <div className="download-buttons">
                <button onClick={downloadPeoplePDF} className="download-btn">Download Users List PDF</button>
                <button onClick={downloadProductsPDF} className="download-btn">Download Products List PDF</button>
                <button onClick={downloadOrdersPDF} className="download-btn">Download Orders List PDF</button>
            </div>

            <Dashboardsecond/>
        </div>
    );
};

export default Blogs;
