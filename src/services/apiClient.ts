import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e6283c259dec472fa186b3d1011fb3fd'
    }
})

