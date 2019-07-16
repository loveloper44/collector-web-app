import React from 'react';
import { Form } from 'semantic-ui-react'
import styled from 'styled-components';
import PointButton from '../common/button/PointButton';

const StyledContainer = styled.div`
    padding:16px;
    background-color:white;
    border-radius: 5px;
`
export default function LoginForm() {

    return (
        <StyledContainer>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                </Form.Field>
                <PointButton fluid type='submit'>Sign In</PointButton>
            </Form>
        </StyledContainer>
    )
}  