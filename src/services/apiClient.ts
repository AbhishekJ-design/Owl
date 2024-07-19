import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8e01f54b4f494a2bb6073149d241d4c6'
    }
})

