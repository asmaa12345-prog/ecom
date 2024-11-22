import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>Admin Panel</h3>
            <ul>
                <li><Link to="/admin/manage-products">Manage Products</Link></li>
                <li><Link to="/admin/visitors">Visitors</Link></li>
                <li><Link to="/admin/orders">Orders</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
