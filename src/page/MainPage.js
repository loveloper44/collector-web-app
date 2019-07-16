import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import SideMenu from '../component/common/side/SideMenu';
import LinkPage from './LinkPage';
import PagePage from './PagePage';
import ProfilePage from './ProfilePage';
import Color from '../component/color/Color';

const GlobalStyle = createGlobalStyle`
    body{
        background: ${Color.white};
    }
`

const Container = styled.div`
    display:flex;
`

const Aside = styled.div`
    width:250px;
`

const Content = styled.div`
    flex-grow:1;
`

export default function MainPage(props) {
    return (<Container>
        <GlobalStyle />
        <Aside>
            <SideMenu />
        </Aside>
        <Content>
            <Switch>
                <Route path="/" component={LinkPage}></Route>
                <Route path="/page" component={PagePage}></Route>
                <Route path="/profile" component={ProfilePage}></Route>
            </Switch>
        </Content>
    </Container>)
}