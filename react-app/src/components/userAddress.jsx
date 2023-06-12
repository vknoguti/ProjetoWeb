import React from 'react';

const UserAddress = ({headerUser, main}) => {
    const type = main ? 'PRINCIPAL' : 'SECUNDÁRIO'
    if(headerUser.logged)
        return (  
        <>
            <div className="address-row">
                <span className="address-title">{type}</span>
                <div id="primary-address">
                    {headerUser.address[0].street}, {headerUser.address[0].number} - {headerUser.address[0].city}-{headerUser.address[0].state} 
                </div>

                <div className="address-group-alter">
                    <input type="submit" id="address1" className="btn-alter-address" value="ALTERAR" />
                </div>
                
            </div>
        </>);
    else
        return <></>
}
 
export default UserAddress;