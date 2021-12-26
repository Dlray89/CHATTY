import React from 'react'
import { Link } from 'react-router-dom'




const Home = () => {
    
    return (
        <div>
      <p>Welcome to Chatty</p>

<div style={{margin:'0 auto',width:'20%',fontSize:'3rem', display:'flex', flexDirection:'row', justifyContent:'space-between', textAlign:'center'}}>
<Link to='/' >Home</Link>
<Link to='/login' >Login</Link>
<Link to='/register' >Register</Link>
</div>
        </div>
    )
}

export default Home