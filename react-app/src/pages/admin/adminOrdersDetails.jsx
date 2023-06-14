import React from 'react';
import './adminOrdersDetails.css'

const OrderDetails = ({result}) => {
    return ( 
        <>
            <div className="order-header">
                <div className="order-id">Order ID</div>
                <div className="order-username">User</div>
                <div className="order-user-address">Delivery Address</div>
                <div className="order-items">Products</div>
            </div>
            
            <div className="order-preview" key={result.id}>
                <div className="order-id">
                    <p>{result.id}</p>
                </div>

                <div className="order-username">
                    <h2>{result.username}</h2>
                </div>
                
                <div className="order-user-address">
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

                <div className="order-items">
                    {result && result.items && result.items.map((itemsInfo) => (
                            <React.Fragment key={itemsInfo.id}>
                            <p><strong>{itemsInfo.brand}  {itemsInfo.model}</strong></p>
                            <p>Size: | {itemsInfo.sizes && itemsInfo.sizes.map(e => {
                            if(e.stock > 0) return ` ${e.size} |`;
                            })}</p>
                            <p>Quantity: | {itemsInfo.sizes && itemsInfo.sizes.map(e => {
                                if(e.stock > 0) return ` ${e.stock} |`;
                            })}</p>
                            <p>Total: R$ {itemsInfo.price}</p>

                            </React.Fragment>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default OrderDetails;