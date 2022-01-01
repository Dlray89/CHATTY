import { Navigate } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
    const getToken = JSON.stringify(localStorage.getItem('token'))
    return getToken ? children : <Navigate to='/'  />


}

export default PrivateRoute