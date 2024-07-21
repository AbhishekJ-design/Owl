import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ab110ecb6b904513a53036dcac35740b'
    }
})

