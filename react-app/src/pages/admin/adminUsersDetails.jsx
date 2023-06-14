import React from 'react';
import './adminUsersDetails.css'

const UsersDetails = ({result}) => {
    return ( 
        <div className="user-preview" key={result.id}>
            <div className="user-name">
                <h2>{result.name}</h2>
            </div>

            <div className="user-email">
                <p><strong>Email: </strong>{result.email}</p>
            </div>

            <div className="user-cpf">
                <p><strong>CPF: </strong>{result.cpf}</p>
            </div>

            <div className="user-cellphone">
                {result.phones.map((phone, index) => (
                <p key={index}><strong>Phone {index+1}: </strong>{phone}</p>
                ))} 
            </div>

            <div className="user-address">
                <p><strong>Address</strong></p>
            {result && result.address && result.address.map((addressItem) => (
                <React.Fragment key={addressItem.id}>
                    <p>{addressItem.street}, {addressItem.number} - {addressItem.neighbourhood}</p>
                    <p>{addressItem.city} - {addressItem.state}</p>
                    <p>CEP: {addressItem.cep}</p>
                    <p>{addressItem.additional}</p>
                </React.Fragment>
                ))}
            </div>

            <div className="user-type">
                <p><strong>Type </strong>
                {result.admin ? (<p>Admin User</p>) : (<p>Normal User</p>)}</p>
            </div>
            
        </div>
     );
}
 
export default UsersDetails;