import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Cart from './pages/cart/cart';

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/cart' element={<Cart />}/>
  </Routes>
  );
}
 
export default App;