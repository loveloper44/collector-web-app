import React from 'react';
import Color from '../../color/Color';
import styled from 'styled-components';

const Container = styled.div`
    background:linear-gradient(${Color.primary}, ${Color.secondary});
    height:100vh;
`

const Title = styled.h2`
    padding: 16px;
    margin:0px;
    color:${Color.white};
`

const MenuItem = styled.div`
    overflow:hidden;
    padding: 16px;
    font-size:1.1rem;
    color: ${Color.white};
    background-color:${Color.primary};
    border-top: 1px solid #ddd;
    &:hover{
        background-color:${Color.darkPrimary};
        cursor:pointer;
    }
`

export default function SideMenu() {
    return (
        <Container>
            <Title>
                Lonnect
            </Title>
            <MenuItem>
                Link
            </MenuItem>
            <MenuItem>
                Page
            </MenuItem>
            <MenuItem>
                My Profile
            </MenuItem>
        </Container>
    )
}