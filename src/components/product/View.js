import React, {useEffect, useState} from 'react';
import axios from '../../axios'

const view = props => {
    const [product, setProduct] = useState(null);
    const [productId] = useState(props.match.params.id)

    useEffect(() => {
        axios.get('/products/'+productId+'.json').then(response => {
            setProduct(response.data);
        });
    }, []);

    return (
        <React.Fragment>
            <h1>View</h1>
            {product ? (
                <div>
                    {product.name}: ${product.price}
                </div>
            ): null}

        </React.Fragment>
    )
}

export default view;