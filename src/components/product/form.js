import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const form = props => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [saved, setSaved] = useState(false);
    const [productId, setProductId] = useState(props.match.params.id)

    useEffect(() => {
        if(productId) {
            axios.get('https://nola-85383.firebaseio.com/products/'+productId+'.json').then(response => {
                setName(response.data.name)
                setPrice(response.data.price)
            });
        }

        return () => {
            console.log('Cleanup');
        };
    }, []);

    const nameInputChangeHandler = event => {
        setName(event.target.value);
    }

    const priceInputChangeHandler = event => {
        setPrice(event.target.value);
    }

    const saveProductHandler = () => {
        axios.post('https://nola-85383.firebaseio.com/products.json', {
            id: productId,
            name: name,
            price: price
        }).then(response => {
            props.history.push('/product/'+response.data.name);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <React.Fragment>
            <h1>Product Form</h1>
            <div>
                <input placeholder="Name" onChange={nameInputChangeHandler} value={name}/>
            </div>
            <div>
                <input placeholder="Price" type="number" onChange={priceInputChangeHandler} value={price}/>
            </div>
            <div>
                <button onClick={saveProductHandler}>Save</button>
            </div>
        </React.Fragment>
    )
}

export default form;