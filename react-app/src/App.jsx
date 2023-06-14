import React, { useEffect, useState } from 'react';
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

import UserProfile from './pages/userprofile/userProfile';
import NotFound from './pages/notfound/notfound';

const App = () => {
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);

  

  useEffect(() => {
    fetch('http://localhost:7000/products')
    .then(response => response.json())
    .then(data => setResults(data))
    .catch(error => console.log(error));
      
    fetch('http://localhost:7000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));

      console.log(results, users);
    }, [results, users]);

  const [headerUser, setHeaderUser] = useState({
      id: null,
      name: '',
      cpf: '',
      email: '',
      password: '',
      phones: [],
      logged: false,
      cart: [],
      admin: false,
      address: []
  })

  return (
  <Routes>
    <Route path='/' element={<Home results={results} headerUser={headerUser} />}/>
    <Route path='/login' element={<Login users={users} headerUser={headerUser} setHeaderUser={setHeaderUser} />}/>
    <Route path='/signup' element={<Signup headerUser={headerUser} />}/>
    <Route path='/user/:id' element={<UserProfile headerUser={headerUser} setHeaderUser={setHeaderUser} />} />
    <Route path='/cart' element={<Cart results={results} headerUser={headerUser} setHeaderUser={setHeaderUser}/>}/>
    <Route path="/product/:id" element={<ProductDetail results={results} headerUser={headerUser} setHeaderUser={setHeaderUser}/>}/>
    <Route path='/checkout' element={<Checkout results={results} setResults={setResults} headerUser={headerUser} setHeaderUser={setHeaderUser}/>} />
    <Route path='/admin' element={<Admin />} />
    <Route path='/adminProducts' element={<AdminProducts />} />
    <Route path='/adminOrders' element={<AdminOrders />} />
    <Route path='/adminUsers' element={<AdminUsers />} />
    <Route path="/products/:id" element={<AdminProductDetails />}/>
    <Route path='*' element={<NotFound />} />
  </Routes>
  );
}
 
export default App;