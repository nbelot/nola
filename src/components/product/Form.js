import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import Input from '../UI/Input';

const form = props => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [productId] = useState(props.match.params.id)

    useEffect(() => {
        if(productId) {
            axios.get('/products/'+productId+'.json').then(response => {
                setName(response.data.name)
                setPrice(response.data.price)
            });
        }
    }, []);

    const nameInputChangeHandler = event => {
        setName(event.target.value);
    }

    const priceInputChangeHandler = event => {
        setPrice(event.target.value);
    }

    const saveProductHandler = () => {
        const url = productId ? '/products/'+productId+'.json' : '/products.json';

        if(productId) {
            axios.put(url, {
                id: productId,
                name: name,
                price: price
            }).then(response => {
                props.history.push('/product/' + response.data.id);
            }).catch(err => {
                console.log(err);
            });
        } else {
            axios.post(url, {
                name: name,
                price: price
            }).then(response => {
                props.history.push('/product/'+response.data.name);
            }).catch(err => {
                console.log(err);
            });
        }

    }

    return (
        <React.Fragment>
            <h1>Product Form</h1>
            <div>
                <Input eleType="input" placeholder="Name" changed={(event) => nameInputChangeHandler(event)} value={name} required={true}></Input>
            </div>
            <div>
                <Input eleType="input" placeholder="Price" changed={(event) => priceInputChangeHandler(event)} value={price} required={true}></Input>
            </div>
            <div>
                <button onClick={saveProductHandler}>Save</button>
            </div>
        </React.Fragment>
    )
}

export default form;