import React from 'react';
import NewPostForm from './NewPostForm';
import RedditPost from './RedditPost';

class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState= <NewPostForm />
      buttonText = "Back to posts";
    } else{
      currentlyVisibleState= <RedditPost postList={this.state.mainPostList} />
      buttonText = "Post something";

    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handelClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ToggleControl;