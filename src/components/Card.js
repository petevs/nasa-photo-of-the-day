import React from "react";
import "../App.css";
import styled from "styled-components"


const Card = props => {
    const {title, date, url, explanation} = props;


return (
    <PhotoCard>
    <Title>{title}</Title>
    <Image className="photo" src={url} alt={title} />
    <Description>{explanation}</Description>
    </PhotoCard>
);
};

const PhotoCard = styled.div`
    border-radius: 6px;
    background: white;
    color: black;
    box-shadow: 0px 0px 1px #ddd, 0 0px 20px #ccc;
    margin-bottom: 10px;
`

const Title = styled.h2`
    text-transform: uppercase;
`
const Image = styled.img`
    width: 100%;
`
const Description = styled.p`
    font-size: 0.9rem;
    padding: 0.5rem;
    font-family: arial;
`

export default Card;