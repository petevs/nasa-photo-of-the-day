import React from "react";
import Card from "./Card"
import "../App.css";
import styled from "styled-components"

const Post = props => {
    const {post} = props;

return (
    <Content>
        <Card title={post.title} date={post.date} url={post.url} explanation={post.explanation}  />
    </Content>
);
};

const Content = styled.div`
    display: grid;
    grid-template-columns: 450px;
    justify-content: center;
    padding: 1rem;
`

export default Post;