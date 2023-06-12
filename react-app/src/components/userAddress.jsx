import React from 'react';

const UserAddress = ({main}) => {
    const type = main ? 'PRINCIPAL' : 'SECUNDÁRIO'
    return (  
    <>
        <div className="address-row">
            <span className="address-title">{type}</span>
            <div id="primary-address">
                RUA PRINCIPAL, 9999 
            </div>

            <div className="address-group-alter">
                <input type="submit" id="address1" className="btn-alter-address" value="ALTERAR" />
            </div>
            
        </div>
    </>);
}
 
export default UserAddress;