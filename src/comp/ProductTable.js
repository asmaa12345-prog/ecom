// import React from 'react';
// import Homeproduct from './home_product';

// const ProductTable = () => {
//     return (
//         <div>
//             <h2>Liste des produits</h2>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Nom</th>
//                         <th>Prix</th>
//                         <th>Catégorie</th>
//                         <th>Type</th>
//                         <th>Image</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Homeproduct.map(product => (
//                         <tr key={product.id}>
//                             <td>{product.id}</td>
//                             <td>{product.Name}</td>
//                             <td>${product.price}</td>
//                             <td>{product.cat}</td>
//                             <td>{product.type}</td>
//                             <td>
//                                 <img src={product.image} alt={product.Name} width="50" />
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ProductTable;
