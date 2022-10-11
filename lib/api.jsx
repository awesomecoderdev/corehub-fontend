import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    withCredentials : true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Content-type": "application/json",
    },
});

export const csrf = api.get("csrf");
export const token = Cookies.get("next_session") ? "Bearer "+ atob(Cookies.get("next_session")) : false;
export default api;
