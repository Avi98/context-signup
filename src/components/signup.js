import React from 'react'
import styled from 'styled-components';
import { Input, Button } from 'antd';
import {Card, ButtonContainer} from "./styles";
import {useSignupState, signupUser, useSignupDispatch} from "../context/signup-context";
import { LoiginContextSet } from '../context/route-context';


const Form = styled.form`
    display:flex;
    justify-content:space-between;
    flex-direction: column;
    height:300px;
`;
export function Signup() {
    const gotToSignup = React.useContext(LoiginContextSet)
    const user = useSignupState()// destructure form useSignup
    const dispatch = useSignupDispatch() //destructure from useDispatch
    const [formState, setFormState] =  React.useState(user.payload);

    function handleChange(e){
        setFormState({...formState, [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        signupUser(dispatch, user.payload, formState)
    }

    return (
       
        <Card>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="name" name="username" value={formState.username} onChange={handleChange} />
                <Input placeholder="email" name="email" value={formState.email} onChange={handleChange}/>
                <Input placeholder="password" name="password" value={formState.password} onChange={handleChange}/>
                <ButtonContainer>
                    <Button type="primary" onClick={()=>{setFormState(user.payload)}}>Reset</Button>
                    <Button type="primary" onClick={handleSubmit}>Signup</Button>
                    <Button type="primary" onClick={gotToSignup}>Login</Button>
                </ButtonContainer>
            </Form>
        </Card>    

    )
}