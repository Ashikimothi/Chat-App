
import {ChatEngine} from 'react-chat-engine'
import './App.css'

import React from 'react'
import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    
    return (
        <ChatEngine
    height="100vh"
    projectID ="a97ec236-9c04-42a3-8d56-0695f9c2e1b3"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} /> }

    />
    )
}

export default App

