import { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


const PrivateRoute = ({ children }) => {
    const  { getAccessTokenSilently} = useAuth0()
    const getToken = getAccessTokenSilently
    return getToken ? children : <Navigate to='/'  />


}

export default PrivateRoute