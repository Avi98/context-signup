import React, { Children } from 'react'
import { useAuth } from "./auth-context";

import * as api from "../api/signup";


const SignUpStateContext = React.createContext();
const SignupDispatchContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'start-request': return {...state, status:'loading', error: null}
        case 'request-success': return {...state, status:'success', error: null}
        case 'request-fail': return {...state, status:'fail', error: action.error}
        default: throw new Error('Undefiend action type dispatched')
    }
 }

export function SignupProvider({ children }) {
    const { user: payload } = useAuth();
    const [state, dispatch] = React.useReducer(reducer, {
        status: null,
        error: null,
        payload,

    })
    return (
    <SignUpStateContext.Provider value={state}>
        <SignupDispatchContext.Provider value={dispatch}>
            {children}
        </SignupDispatchContext.Provider>
    </SignUpStateContext.Provider>)
}

export function useSignupState(){
    const context = React.useContext(SignUpStateContext)
    if(context === undefined){
         throw new Error(" context not used Properly")
    }
    return context
}
export function useSignupDispatch(){
    const context = React.useContext(SignupDispatchContext)
    if(context === undefined){
         throw new Error(" context not used Properly")
    }
    return context
}


export async function signupUser(dispatch, userData, updatedData){
    try{
        dispatch({type: 'start-request'})
        await api.updateUser(userData, updatedData)
        dispatch({type:'request-success'})
        
    }catch(error) {
        console.error("severError:",error)
        dispatch({type:'request-fail',error})
    }
}