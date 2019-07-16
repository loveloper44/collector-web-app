import React from 'react';
import styled from 'styled-components';

const StyledPreview = styled.div`
    height:72px;
    box-sizing:border-box;
    &:hover{
        cursor:pointer;
        box-shadow:2px 2px 5px #ccc;
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

export default function Link(props) {
    const { image, title, description, url } = props;
    return <StyledPreview image={image}>
        <div className='image'>

        </div>
        <div className='content'>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="url">{url}</div>
        </div>
    </StyledPreview>
} 