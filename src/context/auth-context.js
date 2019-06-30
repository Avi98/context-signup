import React from 'react'

const AuthContext = React.createContext({
    user:{
    username:'',
    email:'',
    password: ''}
})

export function useAuth(){
    return React.useContext(AuthContext);
}