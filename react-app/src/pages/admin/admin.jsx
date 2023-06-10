import React, { useState } from 'react';
import './admin.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import AdminProducts from './adminProducts';
import AdminUsers from './adminUsers';
import AdminOrders from './adminOrders';

const Admin = () => {
    const [activePage, setActivePage] = useState("/adminProducts");
    
    const handlePageClick = (page) => {
        setActivePage(page);
    } 

    return (  
        <>
            <Header />
            <Sidebar activePage={activePage} handlePageClick={handlePageClick} />
            <div className="container-data">
                {activePage === '/adminProducts' && <AdminProducts />}
                {activePage === '/adminUsers' && <AdminUsers />}
                {activePage === '/adminOrders' && <AdminOrders />}           
            </div>
        </>
    );
}
 
export default Admin;