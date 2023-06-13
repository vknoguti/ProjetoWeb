import React from 'react';

const UsersDetails = ({result}) => {
    return ( 
        <div className="user-preview" key={result.id}>
            <div className="user-name">
                <h2>{result.name}</h2>
            </div>

            <div className="user-email">
                <p>{result.email}</p>
            </div>

            <div className="user-cpf">
                <p>{result.cpf}</p>
            </div>

            <div className="user-cellphone">
                {result.phones.map(() => (
                    <p>{result.phones}</p>
                ))}
            </div>

            <div className="user-address">
                {result.adress.map(() => (
                    <>
                    <p>{result.street}</p>
                    <p>{result.number}</p>
                    <p>{result.city}</p>
                    <p>{result.state}</p>
                    <p>{result.neighbourhood}</p>
                    <p>{result.cep}</p>
                    </>
                ))}
            </div>

            
        </div>
     );
}
 
export default UsersDetails;