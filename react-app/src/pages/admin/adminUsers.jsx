import React from 'react';
import { useState, useEffect } from 'react';
import UsersDetails from './adminUsersDetails';

const AdminUsers = () => {

    const [results, setResults] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:7000/users')
        .then(response => response.json())
        .then(data => setResults(data))
        .catch(error => console.log(error));
    }, []);


    return ( 
        <UsersDetails result={results}/>
     );
}
 
export default AdminUsers;