import axios from 'axios';
import React, { useState } from 'react'

const LoginForm = () => {
    const [username , setUsername] =useState('');
    const [password, setPassword] =useState('');
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const authObject ={'Project-ID': "a97ec236-9c04-42a3-8d56-0695f9c2e1b3", 'User-Name':username , 'User-Secret':password}
        try {

            //username ||password => chatengine =>messages visible
            await axios.get('https://api.chatengine.io/chats',{headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();

        } catch (error) {
            // error=> try with new username
        }
    }
    return (
        <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}
                 className="input" placehlder="Username" required
                /> 
                 <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                 className="input" placehlder="Password" required
                /> 
                <div align="center">

                  <button type="submit" className="button" >
                    <span>Start Chatting</span>
                    </button>
                </div>
            </form>
        </div>
            
        </div>
    )
}

export default LoginForm
