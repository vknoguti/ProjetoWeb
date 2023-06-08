import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Cart from './pages/cart/cart';
import ProductDetail from './pages/productdetails/productdetails';
import Signup from './pages/signup/signup';

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/product' element={<ProductDetail />}/>
  </Routes>
  );
}
 
export default App;