import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import Color from '../color/Color'
import GoogleImage from './icon/GoogleImage';
import FacebookImage from './icon/FacebookImage';

const Continer = styled.div`
`
const Title = styled.h1`
    color:white;
    text-align:center;
    font-weight:300;
    font-family: Lobster, sans-serif;
`

const InputText = styled.input`
    height:40px;
    padding: 0 10px;
    outline:none;
    font-size:15px;
    box-sizing:border-box;
    width:${props => props.fluid ? '100%' : 'none'};
    display:${props => props.fluid ? 'block' : 'inline'};
    border-radius:5px;
    border-width:0px;
    margin: 8px 0;
    transition: all .2s;

    &:focus{
        transform:scale(1.05);
    }
`
const Button = styled.button`
    height:40px;
    outline:none;
    width:${({ fluid }) => fluid ? '100%' : 'none'};
    display:${({ fluid }) => fluid ? 'block' : 'inline'};
    background:${({ background }) => background || 'white'};
    color:${({ color }) => color || 'black'};
    border-radius:5px;
    border-width:0px;
    font-weight:bold;
    font-size:15px;
    margin: 8px 0;
    transition: all .2s;
    &:hover{
        opacity:0.75;
        cursor:pointer;
        transform:scale(1.05);
    }
    &:focus{
        transform:scale(1.05);
    }
    position: relative;
    img{
        position:absolute;
        left:8px;
        top:8px;
        width:24px;
        height:24px;
    }
`

const SubContainer = styled.div`
    display:flex;
    *{
        flex-basis:50%;
    }
`
const LabelButton = styled.button`
    height:40px;
    border-width:0;
    background:transparent;
    outline:none;
    margin: 8px 0;
    font-size:15px;
    transition: all .2s;
    color:${props => props.color ? props.color : 'gray'};
    &:hover{
        opacity:0.75;
        cursor:pointer;
        transform:scale(1.05);
    }
    &:focus{
        transform:scale(1.05);
    }
`

export default withRouter(function LoginForm(props) {

    return (
        <Continer>
            <Title>Lonnect</Title>
            <InputText type="email" fluid placeholder="Email" />
            <InputText type="password" fluid placeholder="Password" />
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