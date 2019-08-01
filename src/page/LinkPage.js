import React from 'react';
import styled from 'styled-components';
import LinkList from '../component/link/LinkList';
import AddLinkForm from '../component/link/AddLinkForm';
import { Container, Col, Row } from 'react-grid-system';

export default function LinkPage(props) {


    return (<Container>
        <Row>
            <Col sm={6}>
                <LinkList />
            </Col>
            <Col sm={6}>
                <AddLinkForm link />
            </Col>
        </Row>
    </Container>)
}