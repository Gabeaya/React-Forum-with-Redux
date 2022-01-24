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
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }

}

export default ToggleControl;