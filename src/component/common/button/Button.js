import styled from 'styled-components';

const Button = styled.button`
    height:40px;
    padding:0 32px;
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
    }
    &:focus{
        opacity:0.75;
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

export default Button;