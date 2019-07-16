import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const StyledPreview = styled.div`
    height:72px;
    width:100%;
    box-sizing:border-box;
    margin:10px;
    &:hover{
        cursor:pointer;
        box-shadow:2px 2px 5px #eee;
    }

    &::after{
        display: block;
        content: '';
        clear: both;
    }

    .image{
        float:left;
        width:72px;
        height:72px;
        background-image: url(${props => props.image});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 72px 72px;
    }

    .content{
        float:left;
        height:72px;
        padding:8px;
        box-sizing:border-box;
    }

    .title{
        color:black;
        font-size:15px;
        font-weight:bold;
    }
    .description{
        color:gray;
        font-size:13px;
        padding: 4px 0;
    }
    .url{
        color:#999;
        font-size:10px;
    }
`

export default function UrlPreview() {

    const [link, setLink] = useState(null);

    useEffect(() => {
        Axios.post('http://localhost:4000/link', {
            url: 'https://www.naver.com'
        }).then((res) => {
            return res.data;
        }).then((response) => {
            return Axios.get('http://localhost:4000/link/' + response.result.id);
        }).then((res) => {
            return res.data;
        }).then(result => {
            console.log(result);
            setLink(result);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return link ? (
        <StyledPreview image={link.image}>
            <div className='image'>

            </div>
            <div className='content'>
                <div className="title">{link.title}</div>
                <div className="description">{link.description}</div>
                <div className="url">{link.url}</div>
            </div>
        </StyledPreview>
    ) : null;
} 