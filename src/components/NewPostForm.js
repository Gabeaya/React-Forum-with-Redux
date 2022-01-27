import React from "react";
import { v4 } from 'uuid'; 
import PropTypes from "prop-types";
import Moment from "moment";

function NewPostForm(props){
  
  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({title: event.target.title.value, submission: event.target.submission.value, vote: parseInt(event.target.vote.value), timeStamp: new Moment().format('MM/DD/YYY HH:mm:ss'), id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='TITLE' />
        <textarea
          type='text'
          name='submission'
          placeholder='WRITE SOMETHING' />
        <input
          type='hidden'
          name='vote' 
          defaultValue={0}
          disabled
          />
        <button type='submit'>POST TO THE INTERNET FOREVER!</button>
      </form>
    </React.Fragment>
  );
}
NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}
export default NewPostForm;