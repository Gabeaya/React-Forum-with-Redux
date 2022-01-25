import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post }= props;
  return(
    <React.Fragment>
      <h1>Details</h1>
      <h3>{post.title}</h3>
      <p>{post.submission}</p>
      <hr />
    </React.Fragment>
    
  );
}

PostDetail.propTypes = {
  post: PropTypes.object
};

export default PostDetail;