import React from 'react'
import { LoginProvider } from "../context/login-context";
import { Login } from '../components';

export const LoginComp = () => (
    <LoginProvider>
      <Login />
    </LoginProvider>
  )