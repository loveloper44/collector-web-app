import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`

    display:${({ fluid }) => fluid ? "block" : "inline-block"};
    flex-grow:1;
    text-align:left;
    padding-top:8px;

    label{
        display:block;
    }

    input{
        height:40px;
        padding: 0 10px;
        outline:none;
        font-size:15px;
        box-sizing:border-box;
        width:100%;
        border-radius:5px;
        border:1px solid #dedede;
        margin: 8px 0;
        transition: all .2s;
        &:focus{
            border:1px solid ${({ activeBorderColor }) => activeBorderColor};
        }
    }
`

export default function Input(props) {
    const { title, fluid, activeBorderColor, labelStyle, inputStyle, style, ...rest } = props;

    const Label = title ? <label style={labelStyle}>{title}</label> : null;
    return <StyledInput style={style} fluid activeBorderColor={activeBorderColor}>
        {Label}
        <input style={inputStyle} {...rest} />
    </StyledInput>
};

Input.defaultProps = {
    style: {},
    labelStyle: {},
    inputStyle: {},
    activeBorderColor: "#CCC"
}