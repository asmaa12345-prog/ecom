// import React, { useState } from 'react';
// import Homeproduct from './home_product'; // Importation des données
// import './AdminDashboard.css'; // Styles modern

// const AdminDashboard = () => {
//     const [filterCategory, setFilterCategory] = useState('');
//     const [filterType, setFilterType] = useState('');

//     // Filtrage des produits
//     const filteredProducts = Homeproduct.filter(product => {
//         return (
//             (filterCategory ? product.cat === filterCategory : true) &&
//             (filterType ? product.type === filterType : true)
//         );
//     });

//     // Statistiques
//     const totalProducts = Homeproduct.length;
//     const categories = [...new Set(Homeproduct.map(product => product.cat))];
//     const types = [...new Set(Homeproduct.map(product => product.type))];

//     return (
//         <div className="admin-dashboard">
//             {/* Statistiques */}
//             <div className="dashboard-stats">
//                 <h2>Admin Dashboard</h2>
//                 <div className="stats">
//                     <div>Total Products: {totalProducts}</div>
//                     <div>Categories: {categories.length}</div>
//                     <div>Types: {types.length}</div>
//                 </div>
//             </div>

//             {/* Filtres */}
//             <div className="filters">
//                 <label>
//                     Filter by Category:
//                     <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
//                         <option value="">All</option>
//                         {categories.map(cat => (
//                             <option key={cat} value={cat}>{cat}</option>
//                         ))}
//                     </select>
//                 </label>
//                 <label>
//                     Filter by Type:
//                     <select value={filterType} onChange={e => setFilterType(e.target.value)}>
//                         <option value="">All</option>
//                         {types.map(type => (
//                             <option key={type} value={type}>{type}</option>
//                         ))}
//                     </select>
//                 </label>
//             </div>

//             {/* Tableau des produits */}
//             <div className="product-table">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Name</th>
//                             <th>Price</th>
//                             <th>Category</th>
//                             <th>Type</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredProducts.map(product => (
//                             <tr key={product.id}>
//                                 <td><img src={product.image} alt={product.Name} /></td>
//                                 <td>{product.Name}</td>
//                                 <td>${product.price}</td>
//                                 <td>{product.cat}</td>
//                                 <td>{product.type}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;
