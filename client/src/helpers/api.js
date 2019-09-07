import axios from 'axios';

const BASE_API = 'http://localhost:5000';
const BASE_CLIENT = 'http://localhost:8080';

class API {
    static async login (email, password) {
        const url = `${BASE_API}/user/login`;

        return await axios.post(url, { email: email, password: password });
    }

    static finalizeLogin (error = false) {
        if (!error) {
            window.location = BASE_CLIENT;
        }
    }
}

export default API;