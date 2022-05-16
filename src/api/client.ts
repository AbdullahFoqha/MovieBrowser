import * as axios from 'axios';

const client = axios.default.create({
    baseURL: 'https://yts.mx/api/v2',
})

export default client
