import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import SideMenu from '../component/side/SideMenu';
import LinkPage from './LinkPage';
import PagePage from './PagePage';
import ProfilePage from './ProfilePage';
import Color from '../color/Color';
import Toolbar from '../component/toolbar/Toolbar';

const GlobalStyle = createGlobalStyle`
    body{
        background: ${Color.white};
    }
`

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding-top:50px;
    padding-left:250px;
`

const Aside = styled.div`
    width:250px;
    position:fixed;
    height:100%;
    background-color:${Color.dark};
    left:0;
    top:0;
    padding-top:50px;
    box-sizing:border-box;
    overflow:scroll;
`

const Content = styled.div`
    flex-grow:1;
`

export default function MainPage(props) {
    return (<Container>
        <GlobalStyle />
        <Toolbar fixed />
        <Wrapper>
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
        </Wrapper>
    </Container>)
}