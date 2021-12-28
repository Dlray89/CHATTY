import axios from "axios"

export default function authHeader() {
    const token = localStorage.getItem('token')

  return axios.create({
    headers: {
        Authorization: `${token}`
      }
    })
    }
