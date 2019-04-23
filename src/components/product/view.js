import React, {useEffect, useState} from 'react';
import axios from "axios";

const view = props => {
    const [product, setProduct] = useState([]);
    const [productId, setProductId] = useState(props.match.params.id)

    useEffect(() => {
        axios.get('https://nola-85383.firebaseio.com/products/'+productId+'.json').then(response => {
            setProduct(response.data);
        });
        return () => {
            console.log('Cleanup');
        };
    }, []);

    return (
        <React.Fragment>
            <h1>View</h1>
            <div>
                {product.name}: ${product.price}
            </div>
        </React.Fragment>
    )
}

export default view;