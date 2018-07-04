import axios from 'axios';

const instance = axios.create({
    baseURL:'https://school-f94ae.firebaseio.com/'
});

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;