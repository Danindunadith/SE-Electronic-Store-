import React, { useEffect } from "react";

import "./recentproduct.css";
import axios from "axios";
import { useState } from "react";


//import image from "images/image.png"

const RecentProduct = () => {

    const [products, setproducts] = useState([]);


    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get("http://localhost:8000/api/products/getallp");
            setproducts(response.data);
        }

        fetchData();

    },[])

    
    

    
    return (
        <div className='OrderTable'>
            
            <h3>Available Products List</h3>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Order_Id</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>{
                            return(
                                <tr key={product._id}>
                                    <td>{index +1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RecentProduct

/*<td className='actionButtons'>
                                        <Link to={`/edit/`+order._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                    </td>
                                    <td className='actionButtons'>
                                        <button onClick={()=> deleteOrder(order._id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>

*/