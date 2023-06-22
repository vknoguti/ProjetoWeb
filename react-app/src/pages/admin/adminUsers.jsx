import React from 'react';
import { useState, useEffect } from 'react';
import UsersDetails from './adminUsersDetails';
import './adminUsers.css'

const AdminUsers = ({users, setUsers,}) => {    
    useEffect(() => {
      fetch('http://localhost:7000/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error));
    }, []);
    
    return (
        <div className="users-container">
            {users && users.map(user => (
                <UsersDetails user={user} key={user._id} />
            ))}
        </div>
    );
}
 
export default AdminUsers;