import React, {useState, useEffect} from 'react';
import axios from '../../axios'

const list  = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products.json').then(response => {
            const productsData = [];

            for(const key in response.data) {
                productsData.push(
                    {
                        ...response.data[key],
                        id: key
                    }
                )
            }

            setProducts(productsData)
        });
    }, []);

    const viewProductHandler = (id) => {
        props.history.push('/product/'+id);
    }

    const editProductHandler = (id) => {
        props.history.push('/edit/product/' + id);
    }

    const deleteProductHandler = (id) => {
        axios.delete('/products/'+id+'.json').then(() => {
            const updatedProducts = products.filter(product => product.id !== id);

            setProducts(updatedProducts);
        });
    }

    return (
        <React.Fragment>
            <h1>List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <button onClick={() =>viewProductHandler(product.id)}>View</button>
                        </td>
                        <td>
                            <button onClick={() =>editProductHandler(product.id)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() =>deleteProductHandler(product.id)}>Delete</button>
                        </td>
                    </tr>)
                )}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default list;