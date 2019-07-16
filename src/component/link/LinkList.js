import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from './Link';

const List = styled.div`
    margin-top: 32px;
`
const ListItem = styled.div`
    margin-bottom:10px;
`

export default function LinkList() {

    const data = [{
        id: 1,
        title: '네이버',
        image: 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
        description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
        url: 'https://www.naver.com/'
    },
    {
        id: 2,
        title: '네이버',
        image: 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
        description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
        url: 'https://www.naver.com/'
    },
    {
        id: 3,
        title: '네이버',
        image: 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
        description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
        url: 'https://www.naver.com/'
    },
    {
        id: 4,
        title: '네이버',
        image: 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
        description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
        url: 'https://www.naver.com/'
    }];

    const list = data.map((item) => {
        const { id, image, title, description, url } = item;
        return <ListItem
            key={id}>
            <Link
                title={title}
                image={image}
                description={description}
                url={url} />
        </ListItem>
    })

    return <List>
        {list}
    </List>
} 