import styled from 'styled-components';
import { Button } from 'semantic-ui-react'
import Color from '../../color/Color'

const PointButton = styled(Button)`
&&&{
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
}
`
export default PointButton;