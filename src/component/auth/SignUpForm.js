import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import Color from '../../color/Color'
import FacebookImage from './icon/FacebookImage';
import GoogleImage from './icon/GoogleImage';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import LabelButton from '../common/button/LabelButton';

const Continer = styled.div`
`
const Title = styled.h1`
    color:white;
    text-align:center;
    font-weight:300;
    font-family: Lobster, sans-serif;
`

const SubContainer = styled.div`
    display:flex;
    *{
        flex-basis:100%;
    }
`

export default withRouter(function SignUpForm(props) {

    return (
        <Continer>
            <Title>Lonnect</Title>
            <Input type="email" fluid placeholder="Email" />
            <Input type="password" fluid placeholder="Password" />
            <Button fluid background="#08ffc8" color={Color.primary} >Sign up</Button>
            <br />
            <Button fluid background="#3b5998" color="#ffffff" >
                <FacebookImage />
                Sign up with Facebook</Button>
            <Button fluid background="#fff" color="#444" >
                <GoogleImage />
                Sign up with Google</Button>
            <SubContainer>
                <LabelButton color="white" onClick={() => {
                    props.history.push('/login')
                }}>Login</LabelButton>
            </SubContainer>
        </Continer>
    )
})