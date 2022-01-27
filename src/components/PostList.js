import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return(
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) =>
        <Post 
          whenPostClicked = { props.onPostSelection} 
          title={post.title}
          submission={post.submission}
          vote={post.vote}
          timeStamp={post.timeStamp}
          id={post.id}
          key={post.id} />
      ).sort((a,b) => (b.props.vote - a.props.vote))}
    </React.Fragment>
  );
}
PostList.propTypes = {
  postList:PropTypes.object,
  onPostSelection: PropTypes.func
};
export default PostList;