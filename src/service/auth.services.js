import axios from "axios";


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
            console.log(res, 'resdfrg')
            JSON.parse(localStorage.setItem('user', res.username))

           
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

   
}

export default new AuthService()

