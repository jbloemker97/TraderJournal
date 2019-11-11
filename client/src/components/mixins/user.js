import axios from 'axios';

export default {
    methods: {
        getUser: async (jwt) => {
            const url = 'http://localhost:5000/user';
            const headers = {'x-auth-token': jwt};
            const user = await axios.get(url, { headers });
        }
    }
};