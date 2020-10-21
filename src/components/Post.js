import React from "react";
import Card from "./Card"
import "../App.css";

const Post = props => {
    const {post} = props;

return (
    <div className="content">
        <Card title={post.title} date={post.date} url={post.url} explanation={post.explanation}  />
    </div>
);
};


export default Post;