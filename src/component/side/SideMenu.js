import React from 'react';
import Color from '../../color/Color';
import styled from 'styled-components';

const Container = styled.div`
`

const MenuItem = styled.div`
    overflow:hidden;
    padding: 16px;
    font-size:1.1rem;
    font-weight:bold;
    color: ${Color.white};
    background-color:${Color.dark};
    border-bottom: 1px solid #ddd;
    border-left:5px solid ${Color.dark};
    transition: all .2s ease-in-out;
    &:hover{
        border-left:5px solid white;
        cursor:pointer;
    }
`

export default function SideMenu() {
    return (
        <Container>
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