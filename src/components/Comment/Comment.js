import React from 'react';

import './Comment.css';

function Avatar({ avatar }) {
  return <img className="avatar-coment" src={avatar}></img>;
}

function Content({ comment }) {
  return (
    <div className="comment-content">
      <p>
        <span className="author">{comment.author.name}</span>
        <span>{comment.content}</span>
      </p>
    </div>
  );
}

function Comment({ data }) {
  return (
    <div className="comments">
      <Avatar avatar={data.author.avatar}/>
      <Content comment={data}/>
    </div>
  );
}

export default Comment;