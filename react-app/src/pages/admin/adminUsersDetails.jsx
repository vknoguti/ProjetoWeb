import React from 'react';
import './adminUsersDetails.css'

const UsersDetails = ({user}) => {
    return ( 
        <div className="user-preview" key={user._id}>
            <div className="user-name">
                <h2>{user.name}</h2>
            </div>

            <div className="user-email">
                <p><strong>Email: </strong>{user.email}</p>
            </div>

            <div className="user-cpf">
                <p><strong>CPF: </strong>{user.cpf}</p>
            </div>

            <div className="user-cellphone">
                {user.phones.map((phone, index) => (
                <p key={index}><strong>Phone {index+1}: </strong>{phone}</p>
                ))} 
            </div>

            <div className="user-address">
                <p><strong>Address</strong></p>
            { user && user.address ?
                (<React.Fragment key={user.address._id}>
                    <p>{user.address.street}, {user.address.number}</p>
                    {user.address.complement ? (<p>user.address.complement</p>) : <></>}
                    <p>{user.address.neighbourhood}</p>
                    <p>{user.address.city} - {user.address.state}</p>
                    <p>CEP: {user.address.cep}</p>
                    {user.address.additional ? (<p>user.address.additional</p>) : <></>}
                </React.Fragment>) : <></>
            }
            </div>

            <div className="user-type">
                <p><strong>Type </strong>
                {user.admin ? (<p>Admin User</p>) : (<p>Normal User</p>)}</p>
            </div>
            
        </div>
     );
}
 
export default UsersDetails;