import React from 'react';

import Comments from '../Comment/Comment';

import './Post.css';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar}></img>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostContent({ content }) {
  return <p className="post-content">{content}</p>;
}

function PostDivider({ comments }) {
  return comments.length !== 0 ? <hr className="divider"></hr> : null;
}

function PostComment({ comments }) {
  return (
    <>
      <PostDivider comments={comments}/>
      { comments && comments.map(comment => <Comments key={comment.id} data={comment}/>) }
    </>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date}/>
      <PostContent content={content}/>
      <PostComment comments={comments}/>
    </div>
  );
}

export default Post;