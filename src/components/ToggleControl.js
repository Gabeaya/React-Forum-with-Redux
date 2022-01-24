import React from 'react';
import NewPostForm from './NewPostForm';
import RedditPost from './RedditPost';

class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };

  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState= <NewPostForm />
    } else{
      currentlyVisibleState= <RedditPost />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default ToggleControl;