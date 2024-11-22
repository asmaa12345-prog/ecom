import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './comp/nav';
import Rout from './comp/rout';
import Footer from './comp/footer';
import AdminDashboard from './comp/Dashboard'; // The admin page component
import Homeproduct from './comp/home_product';

const App = () => {
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState('');

  // Shop category filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => product.cat === x);
    setShop(catefilter);
  };

  const allcatefilter = () => {
    setShop(Homeproduct);
  };

  // Shop Search Filter
  const searchlength = (search || []).length === 0;

  const searchproduct = () => {
    if (searchlength) {
      alert('Please Search Something!');
      setShop(Homeproduct);
    } else {
      const searchfilter = Homeproduct.filter((x) => x.cat === search);
      setShop(searchfilter);
    }
  };

  // Add To cart
  const addtocart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert('This product is already added in cart');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Added To cart');
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* صفحة الادمن تعرض لوحدها بدون Navbar و Footer */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* باقي الصفحات مع Navbar و Footer */}
        <Route
          path="/*"
          element={
            <>
              <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
              <Rout
                setCart={setCart}
                cart={cart}
                shop={shop}
                Filter={Filter}
                allcatefilter={allcatefilter}
                addtocart={addtocart}
              />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
