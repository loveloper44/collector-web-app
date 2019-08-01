import React from 'react';
import styled from 'styled-components';
import Button from '../common/button/Button';
import Color from '../../color/Color';
import Input from '../common/input/Input'

const Container = styled.div`
`
const Image = styled.img`
    width:91px;
    height:91px;
`

export default function AddLinkForm(props) {
    const { link } = props;
    if (link) {
        return (
            <Container>
                <h2>https://www.naver.com</h2>

                <Image src='https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png' />

                <Input activeBorderColor={Color.point} title={"Title"} ></Input>

                <Input activeBorderColor={Color.point} title={"Content"} ></Input>

                <Button background={Color.primary} color={Color.white} >Add</Button>
            </Container>
        )
    } else {
        return (
            <Container>
                <Input title={"Url"} value={'This is content'} placeholder="https://" />
                <Button background={Color.primary} color={Color.white} >Add</Button>
            </Container>
        )
    }

}