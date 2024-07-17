import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6453b6aa95084a08ab0e0ce4b399e83b'
    }
})

