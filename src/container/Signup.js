import React from 'react'
import { SignupProvider } from "../context/signup-context";
import { Signup } from '../components';

export const SignupComp = () => (
    <SignupProvider>
      <Signup />
    </SignupProvider>
  )