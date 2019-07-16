import React from 'react';
import styled from 'styled-components';
import LinkList from '../component/link/LinkList';
import AddLink from '../component/link/AddLink';

const Container = styled.div`
    padding:16px;
    max-width:700px;
`

export default function LinkPage(props) {
    return (<Container>
        <AddLink />
        <LinkList />
    </Container>)
}