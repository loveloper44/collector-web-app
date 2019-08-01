import React from 'react';
import styled from 'styled-components';
import Color from '../../color/Color';

const LinkView = styled.div`
    padding:16px;
    display:flex;
    box-shadow: 2px 2px 5px #DEDEDE;
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.03);
        cursor:pointer;
    }

    img{
        width:91px;
        height:91px;
        margin-right:16px;
    }

    .content{
        overflow: hidden;
        .url{
            margin-top:12px;
            a{
                font-size: 1rem;
                text-decoration: none;
                color:gray;
                transition: all .2s ease-in-out;
            }
        }
        h2{
            margin:0;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
        p{
            margin-top:12px;
            margin-bottom:0;
            color:gray;
            font-size: 1rem;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            transition: all .2s ease-in-out;
        }
    }

`

export default function Link(props) {
    const { image, title, description, url } = props;
    return <LinkView >
        <img src={image} />
        <div className='content'>
            <h2>{title}</h2>
            <p >{description}</p>
            <div className="url"><a href={url}>{url}</a></div>
        </div>
    </LinkView>
} 