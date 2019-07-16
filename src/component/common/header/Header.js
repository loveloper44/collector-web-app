import React from 'react';
import styled from 'styled-components';
import Color from '../../color/Color';


const StyledToolbar = styled.div`
    height:50px;
    background:${Color.primary};
    display:flex;
`

const StyledLogo = styled.h2`
    color:${Color.white};
    line-height:50px;
    margin:0;
    padding:0 16px;
`

export default function Header(props) {
    return (<div>
        <StyledToolbar>
            <StyledLogo >
                Lonnect
            </StyledLogo>
        </StyledToolbar>
    </div>
    )
}