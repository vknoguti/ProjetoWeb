import React from 'react';
import './adminUsersDetails.css'


const UsersDetails = ({result}) => {
    return ( 
        <div className="user-preview" key={result.id}>
            <div className="user-name">
                <h2>{result.name}</h2>
            </div>

            <div className="user-email">
                <p>Email: {result.email}</p>
            </div>

            <div className="user-cpf">
                <p>CPF: {result.cpf}</p>
            </div>

            <div className="user-cellphone">
                {result.phones.map((phone, index) => (
                <p key={index}>Phone {index+1}: {phone}</p>
                ))} 
            </div>

            <div className="user-address">
            {result && result.address && result.address.map((addressItem) => (
                <React.Fragment key={addressItem.id}>
                    <p>{addressItem.street}, {addressItem.number} - {addressItem.neighbourhood}</p>
                    <p>{addressItem.city} - {addressItem.state}</p>
                    <p>CEP: {addressItem.cep}</p>
                </React.Fragment>
                ))}
            </div>
        </div>
     );
}
 
export default UsersDetails;