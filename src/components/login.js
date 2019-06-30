import React from 'react'
import {  Input, Button } from 'antd';
import {Card, ButtonContainer} from "./styles";
import {LoiginContextSet} from "../context/route-context";
import { useLoginState, useLoginDispatch, LoginUser } from '../context/login-context';

export function Login (){
    const gotToSignup = React.useContext(LoiginContextSet)
    const user = useLoginState()// destructure form useSignup
    const dispatch = useLoginDispatch() //destructure from useDispatch
    const [formState, setFormState] =  React.useState(user.payload);

    function handleChange(e){
        setFormState({...formState, [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        LoginUser(dispatch, user.payload, formState)
    }
    return(
        <Card >
            <h1>Login</h1>
            <Input placeholder="User Name" name="username" value={formState.username} onChange={handleChange} />
            <Input placeholder="password" name="password" value={formState.password} onChange={handleChange} />
            <ButtonContainer>

            <Button type="primary" onClick={gotToSignup}>Signup</Button>
            <Button type="primary" onClick={handleSubmit}>Login</Button>
            </ButtonContainer>
        </Card>
    )
}