import React, {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const form = props => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const nameInputChangeHandler = event => {
        setName(event.target.value);
    }

    const priceInputChangeHandler = event => {
        setPrice(event.target.value);
    }

    const redirectSuccessHandler = () => {
    }

    const saveProductHandler = () => {
        axios.post('https://nola-85383.firebaseio.com/products.json', {
            name: name,
            price: price
        }).then(response => {
            redirectSuccessHandler();
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