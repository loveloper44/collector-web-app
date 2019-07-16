import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import LoginForm from '../component/login/LoginForm';
import Background from '../component/common/background/Background'

const VerticalWrapper = styled.div`
    height: 100vh;
    position: relative;
`

const VerticalContent = styled.div`
  margin: 0;
  width:100%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`
const StyledTitle = styled.h1`
    color:white;
`

export default function LoginPage(props) {
    return (
        <Background>
            <Container>
                <Grid centered>
                    <Grid.Column mobile={16} tablet={8} computer={6}>
                        <VerticalWrapper>
                            <VerticalContent>
                                <StyledTitle>Lonnect</StyledTitle>
                                <LoginForm />
                            </VerticalContent>
                        </VerticalWrapper>
                    </Grid.Column>
                </Grid>
            </Container>
        </Background>
    )
}