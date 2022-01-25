import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDownVote }= props;
  return(
    <React.Fragment>
      <h1>Details</h1>
      <h3>{post.title}</h3>
      <p>{post.submission}</p>
      <p>Votes: {post.vote}</p>
      <button onClick={() => onClickingDownVote(post.id)}>-</button>
      <hr />
    </React.Fragment>
    
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDownVote: PropTypes.func
};

export default PostDetail;