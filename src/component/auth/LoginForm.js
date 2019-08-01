import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import Color from '../../color/Color'
import GoogleImage from './icon/GoogleImage';
import FacebookImage from './icon/FacebookImage';
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
        flex-basis:50%;
    }
`


export default withRouter(function LoginForm(props) {

    return (
        <Continer>
            <Title>Lonnect</Title>
            <Input type="email" activeBorderColor={Color.point} fluid placeholder="Email" />
            <Input type="password" activeBorderColor={Color.point} fluid placeholder="Password" />
            <Button fluid background="#08ffc8" color={Color.primary} >Login</Button>
            <br />
            <Button fluid background={Color.facebook} color={Color.facebookText} >
                <FacebookImage />
                Login with Facebook</Button>
            <Button fluid background={Color.google} color={Color.googleText} >
                <GoogleImage />
                Login with Google</Button>
            <SubContainer>
                <LabelButton color="white" >Forgot password?</LabelButton>
                <LabelButton color="white" onClick={() => {
                    props.history.push('/sign-up')
                }}>Sign up</LabelButton>
            </SubContainer>
        </Continer>
    )
})