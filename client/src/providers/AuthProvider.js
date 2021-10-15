import React, { useState } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const handleRegister = (user, history) => {
    axios.post('/api/auth', user)
    .then( res => {
      setUser(res.data.data)
      history.push("/")
    })
    .catch( err => console.log(err))
  }

  const handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
    .then( res => {
      setUser(res.data.data)
      history.push("/")
    })
    .catch( err => console.log(err))
  }

  const handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
    .then( res => {
      setUser(null)
      history.push("/")
    })
    .catch( err => console.log(err))
  }

  const updateUser = (id, user) => {
    let data = new FormData()
    data.append('file', user.file)
    data.append('first_name', user.first_name)
    data.append('last_name', user.last_name)
    data.append('email', user.email)
    axios.put(`/api/users/${id}`, data)
      .then( res => setUser(res.data) )
      .catch( err => console.log(err))
     window.location.href = '/profile'
  }

  return(
    <AuthContext.Provider value={{
      user,
      handleRegister: handleRegister,
      handleLogin: handleLogin,
      handleLogout: handleLogout,
      authenticated: user !== null, 
      setUser: (user) => setUser({ user }),
      updateUser: updateUser
    }}>
      {children}
    </AuthContext.Provider>   
  )
}

export default AuthProvider;