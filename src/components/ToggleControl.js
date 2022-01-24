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

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  render(){
    let currentlyVisibleState = null;
    let postButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState= <NewPostForm />
    } else{
      currentlyVisibleState= <RedditPost />
      postButton = <button onClick={this.handelClick}>Post Something</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {postButton}
      </React.Fragment>
    );
  }

}

export default ToggleControl;