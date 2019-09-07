import axios from 'axios';

const BASE_ENDPOINT = 'http://localhost:5000';

class API {
    static async login (email, password) {
        const url = `${BASE_ENDPOINT}/user/login`;

        return await axios.post(url, { email: email, password: password });
    }
}

export default API;