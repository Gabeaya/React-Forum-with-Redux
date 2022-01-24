import React from "react";
import { v4 } from 'uuid'; 

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

export default NewPostForm;