import React from 'react';
import styled from 'styled-components';
import Color from '../../color/Color';


const Container = styled.div`
    height:50px;
    background:${Color.white};
    position: ${({ fixed }) => fixed ? 'fixed' : 'static'};
    width:${({ fixed }) => fixed ? '100%' : 'none'};
    display:flex;
    box-shadow:0px 2px 1px #ddd;
    z-index:32;
`

const Logo = styled.h2`
    color: ${ Color.primary};
    line-height:50px;
    margin: 0;
    padding: 0 16px;
    font-family: Lobster, sans-serif;
`

export default function Toolbar(props) {
    const { fixed } = props;
    return (<Container fixed={fixed}>
        <Logo >
            Lonnect
        </Logo>
    </Container>
    )
}