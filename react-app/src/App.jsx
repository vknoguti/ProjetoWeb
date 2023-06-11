import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Cart from './pages/cart/cart';
import ProductDetail from './pages/productdetails/productdetails';
import Signup from './pages/signup/signup';
import Checkout from './pages/checkout/checkout';
import Admin from './pages/admin/admin';
import AdminProducts from './pages/admin/adminProducts';
import AdminOrders from './pages/admin/adminOrders';
import AdminUsers from './pages/admin/adminUsers';
import AdminProductDetails from './pages/admin/adminProductDetails'

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/product' element={<ProductDetail />}/>
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/admin' element={<Admin />} />
    <Route path='/adminProducts' element={<AdminProducts />} />
    <Route path='/adminOrders' element={<AdminOrders />} />
    <Route path='/adminUsers' element={<AdminUsers />} />
    <Route path="/products/:id" element={<AdminProductDetails />}/>

  </Routes>
  );
}
 
export default App;