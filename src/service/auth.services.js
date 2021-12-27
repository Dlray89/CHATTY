import axios from "axios";
import history from "../utils/history";


const API_URL = '/api/auth/'

class AuthService {
    login(username, password) {
        return axios.post(API_URL + 'login', {
            username,
            password
        }).then(res => {
           
            return res.data
        })
    }
    
    logout() {
        localStorage.removeItem('user')
        
        localStorage.removeItem('token')
        localStorage.removeItem('welcome')
    }
    
    register(username, password) {
        return axios.post(API_URL + 'register', {
            username,
            password
        }).then(res => {
            console.log(res)

           
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default new AuthService()

