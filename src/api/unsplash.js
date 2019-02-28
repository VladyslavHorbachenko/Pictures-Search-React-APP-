import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 7d93b29ae612d9f89f8e95765b5a826a9c3046b064d54e09a6be9a04bc77979b'
    }
});