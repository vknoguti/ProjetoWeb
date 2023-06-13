import React from 'react';
import { useState, useEffect } from 'react';
import UsersDetails from './adminUsersDetails';
import './adminUsers.css'
import Searchbar from '../../components/Searchbar';

const AdminUsers = () => {

    const [results, setResults] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:7000/users')
        .then(response => response.json())
        .then(data => setResults(data))
        .catch(error => console.log(error));
    }, []);

    console.log(results)

    
    return (
        <div className="users-container">
            {results && results.map(result => (
                <UsersDetails result={result} key={result.id} />
            ))}
        </div>
    );
}
 
export default AdminUsers;