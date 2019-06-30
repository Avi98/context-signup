import React from 'react'
import {useAuth} from "./auth-context";
import * as api from "../api/signup";

const LoginStateContext = React.createContext();
const LoginDispatchContext = React.createContext();


const reducer = (state, action) => {
    switch(action.type){
        case 'start-request': return {...state, status:'loading', error: null}
        case 'request-success': return {...state, status:'success', error: null}
        case 'request-fail': return {...state, status:'fail', error: action.error}
        default: throw new Error('Undefiend action type dispatched')
    }
 }
export function LoginProvider({children}){
    const {user:payload} = useAuth();
    const [state, dispatch] = React.useReducer(reducer,{
        status: null,
        error: null,
        payload
    })
  return(
      <LoginStateContext.Provider value={state}>
        <LoginDispatchContext.Provider value={dispatch}>
            {children}
        </LoginDispatchContext.Provider>
      </LoginStateContext.Provider>
  )
}

export function useLoginState(){
    const context = React.useContext(LoginStateContext);
    if(context===undefined){
        throw new Error('Context not used Properly')
    }
    return context
}
export function useLoginDispatch(){
    const context = React.useContext(LoginStateContext);
    if(context===undefined){
        throw new Error('Context not used Properly')
    }
    return context
}

export async function LoginUser(dispatch, userData, updatedData){
    try{
        dispatch({type: 'start-request'})
        await api.loginUser(userData, updatedData)
        dispatch({type:'request-success'})
        
    }catch(error) {
        console.error("severError:",error)
        dispatch({type:'request-fail',error})
    }
}

