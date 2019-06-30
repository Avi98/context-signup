import React from 'react';
import styled from 'styled-components';
import {LoginComp} from "./container/Login";
import { SignupComp} from "./container/Signup";
import { RouteProvider } from "./context/route-context";
import {LoiginContextState} from "./context/route-context";
import "antd/dist/antd.css";


const Container = styled.div`
   position: relative;
   height: 400px;
   display:flex;
   justify-content: center;

`

function Route() {
 const context = React.useContext(LoiginContextState);
 debugger
  return (
    !context.login.isLogin  ? <LoginComp /> : <SignupComp />
  )
}

function App() {
  return (
    <Container>
      <RouteProvider>
        <Route />
      </RouteProvider>
    </Container>
  )
}

export default App;
