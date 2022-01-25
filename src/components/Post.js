import React from "react";
import PropTypes from 'prop-types';

function Post(props){

  return (
    <React.Fragment>
      <div onClick = { () => props.whenPostClicked(props.id)}>
        <h2>{props.title} UP+ / Down- Votes: {props.vote}</h2>
        <p>{props.submission}</p>

        <hr/>
      </div>
      
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  submission: PropTypes.string.isRequired,
  vote: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};
export default Post;