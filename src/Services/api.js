import axios from 'axios';

const deezerApi = axios.create({
    baseURL: 'https://api.deezer.com/chart'
})

export default deezerApi;