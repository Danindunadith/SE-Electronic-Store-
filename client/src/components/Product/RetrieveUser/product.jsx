import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/products/getallp");
      setProducts(response.data);
      setFilteredProducts(response.data); // Initially, all products are displayed
    };

    fetchData();
  }, []);

  // Filter products based on the search term
  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:8000/api/products/deletep/${productId}`)
      .then((response) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
        toast.success(response.data.msg, { position: 'top-right' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='OrderTable'>
      <Link to={"/addproduct"} className='addButton'>Add New Product</Link>
      <h3>Products List</h3>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, category, or description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
      />

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Order_Id</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredProducts.map((product, index) => {
              return (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.description}</td>

                  <td className='actionButtons'>
                    <Link to={`/editproduct/` + product._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                  </td>

                  <td className='actionButtons'>
                    <button onClick={() => deleteProduct(product._id)}><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Product;
