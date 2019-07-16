import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'semantic-ui-react';
import PointButton from '../common/button/PointButton';

const StyledContainer = styled.div`
    padding:16px;
    background-color:white;
    border-radius: 5px;
    border: 1px solid #ddd;
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content: flex-end;
`

export default function AddLink(props) {




    return <StyledContainer>
        <Form>
            <Form.Field>
                <label>Add Link</label>
                <input placeholder='First Name' />
            </Form.Field>

            <ButtonContainer >
                <PointButton type='submit'>Next</PointButton>
            </ButtonContainer>
        </Form>
    </StyledContainer>
}