import styled from 'styled-components';
import Color from '../../color/Color'

const Button = styled.button`
    color:white;
    background-color:${Color.point};
    &:hover{
        color:white;
        opacity:0.7;
        background-color:${Color.point};
    }
    &:focus{
        color:white;
        background-color:${Color.point};
    }
`
export default Button;