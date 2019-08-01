import styled from 'styled-components';

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

export default LabelButton;