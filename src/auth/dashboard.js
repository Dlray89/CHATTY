import axios from "axios";
import React, { useState, useEffect } from "react";
// import userService from "../service/user.service";


const Dashboard = () => {
  // const token = localStorage.getItem("token");
  // const [message, setMessage] = useState(welcomeMessage);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get('https://chatty-be.herokuapp.com/api/users').then(res => {
      console.log(res.data)
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
    })

    setTimeout(function () {
      window.location.reload()
    }, 15000)
    
  }, [])


  
  return (
  
       <div style={{ marginTop: "10rem", fontSize: "3rem" }}>
                  Hello therer 
      <button >get users</button>
      {users.map(user => (
        <div>
          { user.username}
        </div>
      ))}
               
        </div>
    
  );
};

export default Dashboard;
