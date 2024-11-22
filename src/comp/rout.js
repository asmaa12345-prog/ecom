import React from 'react'
import { Routes, Route} from 'react-router';
import LoginPage from './LoginPage';
// import AdminDashboard from './AdminDashboard';

import Home from './home';
import Shop from './shop';
import Cart from './cart';
import Contact from './contact';
const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart ={setCart}/>} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}

        <Route path='/login' element={<LoginPage />} /> {/* Ajouter cette route */}

    </Routes>
    </>
  )
}

export default Rout