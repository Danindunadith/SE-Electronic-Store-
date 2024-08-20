/*import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Order from './components/RetrieveOrder/Order';
import AddOrder from './components/placeOrder/AddOrder';
import EditOrder from './components/updateOrder/EditOrder';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Order/>,
    },
    {
      path:"/add",
      element:<AddOrder/>,
    },
    {
      path:"/edit/:id",
      element:<EditOrder/>,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App; */

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from './components/Dashboard';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import AddOrder from "./components/placeOrder/AddOrder";
import EditOrder from './components/updateOrder/EditOrder';
import AddProduct from "./components/Product/placeProduct/addProduct";
import Product from "./components/Product/RetrieveUser/product";
import AddPeople from "./components/People_mng/placePeople/addPeople";
import People from "./components/People_mng/retrievePeople/people";
import EditPeople from "./components/People_mng/UpdatePeople/editPeople";
import EditProduct from "./components/Product/UpdateProduct/editProduct";
import Order from "./components/RetrieveOrder/Order";
import Orderrecent from "./components/RetrieveOrder/recent";
import RecentProduct from "./components/Product/RetrieveUser/recentproduct";
import Dashboardsecond from "./components/second";



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route
                    path="/annual"
                    element={<AnnualReport />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/add"
                    element={<AddOrder />}
                />

                <Route
                    path="/addproduct"
                    element={<AddProduct />}
                />

                <Route
                    path="/viewproduct"
                    element={<Product />}
                />

                <Route
                    path="/addpeople"
                    element={<AddPeople />}
                />

                <Route
                    path="/people"
                    element={<People />}
                />

                <Route
                    path="/order"
                    element={<Order />}
                />

                <Route
                    path="/recentorder"
                    element={<Orderrecent />}
                />

                <Route
                    path="/recentproduct"
                    element={<RecentProduct />}
                />

                <Route
                    path="/second"
                    element={<Dashboardsecond />}
                />





                <Route
                    path="/edit/:id"
                    element={<EditOrder/>}
                />

                <Route
                    path="/editpeople/:id"
                    element={<EditPeople/>}
                />

                 <Route
                    path="/editproduct/:id"
                    element={<EditProduct/>}
                />





                <Route path="/team" element={<Teams />} />
                <Route path="/blogs" element={<Blogs />} />
                
            </Routes>
        </Router>
    );
}

export default App;