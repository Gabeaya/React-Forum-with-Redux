import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return(
    <React.Fragment>
      <hr />
      {props.postList.map((post, index) =>
        <Post title={post.title}
          submission={post.submission}
          key={index} />
        )}
    </React.Fragment>
  );
}
PostList.propTypes = {
  postList:PropTypes.array
};
export default PostList;