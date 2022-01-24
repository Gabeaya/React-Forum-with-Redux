import React from "react";
import PropTypes from 'prop-types';

function Post(props){
  const title = "Worst Day";
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <p>{props.submission}</p>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  submission: PropTypes.string.isRequired
};
export default Post;