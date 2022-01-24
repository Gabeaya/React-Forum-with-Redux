import React from "react";
import { v4 } from 'uuid'; 
import PropTypes from "prop-types";

function NewPostForm(props){
  
  function handleNewPostFormSubmission(event){
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Pair Names' />
        <textarea
          type='text'
          name='submission'
          placeholder='Location' />
        
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}
NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}
export default NewPostForm;