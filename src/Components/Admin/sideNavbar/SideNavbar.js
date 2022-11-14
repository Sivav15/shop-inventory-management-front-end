import React from 'react'
import "./SideNavbar.css";
import NavItems from "./NavItems";
import { useNavigate } from 'react-router-dom';

function SideNavbar() {
let navigate=useNavigate()

  const data = [
    {
      menuName: "Dashboard",
      to: "/home",
    },
    {
      menuName: "Brand",
      to: "/home/brand",
    },
    {
      menuName: "Category",
      to: "/home/category",
    },
    {
      menuName: "Products",
      to: "/home/products",
    },
    {
      menuName: "Orders",
      to: "/home/orders",
    },
    {
      menuName: "Users",
      to: "/home/users",
    },
    {
      menuName: "Customer List",
      to: "/home/customers",
    },
  ];

  return (
    <div className="sidebar" >
      <div >
        {data.length > 0 && data.map((val, index) => {
          return <NavItems values={val} key={index}  />;
        })}
          <h4
          onClick={() => {
            navigate("/");
          }}>Logout</h4>
      </div>
     
    </div>
  );
}

export default SideNavbar;
