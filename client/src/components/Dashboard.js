import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/getall');
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/peoples/getallpeople');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
    fetchUsers();
  }, []);

  const totalOrders = orders.length;
  const totalUsers = users.length;

  const categoryData = orders.reduce((acc, order) => {
    const category = acc.find(item => item.name === order.category);
    if (category) {
      category.value += 1;
    } else {
      acc.push({ name: order.category, value: 1 });
    }
    return acc;
  }, []);

  const brandData = orders.reduce((acc, order) => {
    const brand = acc.find(item => item.name === order.brand);
    if (brand) {
      brand.value += 1;
    } else {
      acc.push({ name: order.brand, value: 1 });
    }
    return acc;
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      
      <div className="dashboard-stats">
        <div className="stat-box">
          <p>Total Orders</p>
          <h3>{totalOrders}</h3>
        </div>
        <div className="stat-box">
          <p>Total Customers</p>
          <h3>{totalUsers}</h3>
        </div>
      </div>

      <div className="dashboard-charts">
        {/*
        <div className="chart-box">
          <h3>Orders Amoung Customers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label>
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>  */}

        <div className="chart-box">
          <h3>Orders In Dates</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={brandData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
