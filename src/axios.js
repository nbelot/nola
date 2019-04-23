import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nola-85383.firebaseio.com/'
});

export default instance;