import axios from "axios";
import history from "../utils/history";


const API_URL = '/api/auth/'

class AuthService {
    login(username, password) {
        return axios.post(API_URL + 'signin', {
            username,
            password
        }).then(res => {
            if (res.data.accessToken) {
                localStorage.getItem('user', JSON.stringify(res.data))
                history.push('/comments')
                window.location.reload()
            }

            return res.data
        })
    }
    
    logout() {
    localStorage.removeItem('user')
    }
    
    register(username, email, password) {
        return axios.post(API_URL + 'signup', {
            username,
            email,
            password
        }).then(res => {
            console.log(res.data)
            history.push('/login')
            window.location.reload()
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default new AuthService()

