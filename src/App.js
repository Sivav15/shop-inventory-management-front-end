import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Admin/layout/Layout";
import Dashboard from "./Components/Admin/dashboard/Dashboard";
import Products from "./Components/Admin/product/Products";
import Users from "./Components/Admin/user/Users";
import Customers from "./Components/Admin/customer/Customers";
import Category from "./Components/Admin/category/Category";
import Brand from "./Components/Admin/brand/Brand";
import Orders from "./Components/Admin/order/Orders";
import EditBrand from "./Components/Admin/brand/EditBrand";
import ViewBrand from "./Components/Admin/brand/ViewBrand";
import AddBrand from "./Components/Admin/brand/AddBrand";
import EditCategory from "./Components/Admin/category/EditCategory";
import AddCategory from "./Components/Admin/category/AddCategory";
import ViewCategory from "./Components/Admin/category/ViewCategory";
import ViewProducts from "./Components/Admin/product/ViewProducts";
import AddProducts from "./Components/Admin/product/AddProducts";
import EditProducts from "./Components/Admin/product/EditProducts";
import OneViewproduct from "./Components/Admin/product/OneViewproduct";
import ViewAlluser from "./Components/Admin/user/ViewAlluser";
import ViewOneuser from "./Components/Admin/user/ViewOneuser";
import ViewOnecustomer from "./Components/Admin/customer/ViewOnecustomer";
import ViewAllcustomer from "./Components/Admin/customer/ViewAllcustomer";
import UserPortal from "./Components/Users/UserPortal";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import ForgotPasswordPage from "./Components/Auth/ForgotPasswordPage";
import OrderPage from "./Components/Users/OrderPage";
import { AdminProvider } from "./Components/Context/adminContext";
import Razorpay from "./Components/Users/Razorpay";
import OrderSuccess from "./Components/Users/OrderSuccess";
import Invoice from "./Components/Users/Invoice";

function App() {


  // let user = "admin";
  let user = window.localStorage.getItem("name");
  console.log(user);

  return (
    <div>
       <AdminProvider>
      <Routes>
        {/* Authentication Route */}
       
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password-page/:id/:token" element={<ForgotPasswordPage />} />


          <Route path="/home" element={<Layout />}>
            <Route index element={<Dashboard />} />
            

            <Route path="brand" element={<Brand />}>
              <Route index element={<ViewBrand />} />
              <Route path="add-brand" element={<AddBrand />} />
              <Route path="edit-brand/:id" element={<EditBrand />} />
            </Route>

            <Route path="category" element={<Category />}>
              <Route index element={<ViewCategory />} />
              <Route path="add-category" element={<AddCategory />} />
              <Route path="edit-category/:id" element={<EditCategory />} />
            </Route>

            <Route path="products" element={<Products />}>
              <Route index element={<ViewProducts />} />
              <Route path="oneProducts-view/:id" element={<OneViewproduct />} />
              <Route path="add-products" element={<AddProducts />} />
              <Route path="edit-product/:id" element={<EditProducts />} />
            </Route>

            <Route path="orders" element={<Orders />} />

            <Route path="users" element={<Users />}>
              <Route index element={<ViewAlluser />} />
              <Route path="view-oneuser" element={<ViewOneuser />} />
            </Route>
            
            <Route path="customers" element={<Customers />}>
              <Route index element={<ViewAllcustomer />} />
              <Route path="view-onecustomer" element={<ViewOnecustomer />} />
            </Route>
          </Route>

      
        <Route path="user-portal" element={<UserPortal />}>
          <Route index element={<OrderPage />} />
          <Route path="razorpay" element={<Razorpay />} />
          <Route path="order-success" element={<OrderSuccess />} />
          <Route path="order-success/invoice" element={<Invoice />} />
        </Route>
       


      </Routes>
      </AdminProvider>
    </div>
  );
}

export default App;
