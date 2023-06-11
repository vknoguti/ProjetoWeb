import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../components/useFetch";

const ProductDetails = () => {
    const { id } = useParams();
    const {data: product, error, isPending} = useFetch('http://localhost:7000/products/' + id);
    const navigate = useNavigate();
    
    const handleClick = () => {
        fetch('http://localhost:7000/products/' + product.id, {
            method: 'DELETE'
        }).then(() =>  {
            navigate('/');
        })
    }

    return ( 
        <div className="product-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { product && (
                <article>
                    <h2>{ product.model }</h2>
                    <p>Written by { product.brand }</p>
                    <div> { product.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
     );
}
 
export default ProductDetails;