import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SignUpForm from '../component/auth/SignUpForm';
import Color from '../component/color/Color';

const GlobalStyle = createGlobalStyle`
    body{
        background: ${Color.primary};
    }
`

const Container = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    width:100%;
    max-width:400px;
    box-sizing:border-box;
    padding:16px;
`

export default function SignUpPage(props) {
    return (
        <Container>
            <GlobalStyle />
            <Content >
                <SignUpForm />
            </Content>
        </Container>
    )
}