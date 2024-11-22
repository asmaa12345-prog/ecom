import React, { useState, useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Homeproduct from './home_product';
import './Dashboard.css';

const Dashboard = () => {
    const [products, setProducts] = useState(Homeproduct);
    const [activeSection, setActiveSection] = useState('products'); // Section active
    const orders = [
        { id: 1, customer: 'John Doe', product: 'product1', total: '$26', status: 'Completed' },
        { id: 2, customer: 'Jane Smith', product: 'product3', total: '$236', status: 'Pending' },
    ];

    const chartRef = useRef(null); // Ref for chart

    // Supprimer un produit
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    // Données pour le diagramme
    const chartData = {
        labels: products.map((product) => product.Name),
        datasets: [
            {
                label: 'Prix',
                data: products.map((product) => product.price),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    // Re-render the chart when products change
    useEffect(() => {
        if (chartRef.current) {
            // Re-render the chart if it's already rendered
            chartRef.current.chartInstance.update();
        }
    }, [products]); // Re-run whenever products change

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <ul>
                    <li
                        className={activeSection === 'products' ? 'active' : ''}
                        onClick={() => setActiveSection('products')}
                    >
                        Products
                    </li>
                    <li
                        className={activeSection === 'orders' ? 'active' : ''}
                        onClick={() => setActiveSection('orders')}
                    >
                        Orders
                    </li>
                    <li
                        className={activeSection === 'reports' ? 'active' : ''} // Changed 'statistics' to 'reports'
                        onClick={() => setActiveSection('reports')}
                    >
                        Reports
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Products Section */}
                {activeSection === 'products' && (
                    <div className="section">
                        <h3>Product List</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Type</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.Name}</td>
                                        <td>${product.price}</td>
                                        <td>{product.cat}</td>
                                        <td>{product.type}</td>
                                        <td>
                                            <img src={product.image} alt={product.Name} />
                                        </td>
                                        <td>
                                            <button onClick={() => deleteProduct(product.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Orders Section */}
                {activeSection === 'orders' && (
                    <div className="section">
                        <h3>Orders</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.customer}</td>
                                        <td>{order.product}</td>
                                        <td>{order.total}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Reports Section */}
                {activeSection === 'reports' && (
                    <div className="section">
                        <h3>Sales Chart</h3>
                        {/* Using chartRef to reference the chart */}
                        <Bar ref={chartRef} data={chartData} />

                        {/* New Activity Section */}
                        <div className="latest-activity">
                            <h4>Latest Activity</h4>
                            <ul>
                                <li>Product "product1" sold to John Doe</li>
                                <li>Order for "product3" pending from Jane Smith</li>
                                <li>New product "product4" added</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
