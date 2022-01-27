import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,

    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, title, submission, vote, timeStamp} = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      submission: submission,
      vote: vote,
      timeStamp: timeStamp,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);

  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
    console.log(this.props.mainPostList);
  }

  handleDownVote = id => {
    const { dispatch, mainPostList } = this.props;
    const { title, submission, vote, timeStamp} = mainPostList[id];
    const action = {
      type: 'DECREMENT',
      id: id,
      title: title,
      submission: submission,
      vote: vote,
      timeStamp: timeStamp,
    }
    dispatch(action);
    // const selectedPost = this.props.mainPostList[id];
    // this.setState({selectedPost: selectedPost});
  }

  handleUpVote = id => {
    const { dispatch, mainPostList } = this.props;
    const { title, submission, vote, timeStamp} = mainPostList[id];
    const action = {
      type: 'INCREMENT',
      id: id,
      title: title,
      submission: submission,
      vote: vote,
      timeStamp: timeStamp,
    }
    dispatch(action);
    // const selectedPost = this.props.mainPostList[id];
    // this.setState({selectedPost: selectedPost});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.props.mainPostList[this.state.selectedPost.id]} onClickingDownVote={this.handleDownVote} onClickingUpVote={this.handleUpVote}/>
      console.log(this.state.selectedPost);
      console.log(this.props.mainPostList);
      buttonText = "back to posts";
    } else if(this.props.formVisibleOnPage) {
      currentlyVisibleState= <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>
      buttonText = "Back to posts";
    } else{
      currentlyVisibleState= <PostList postList={this.props.mainPostList} onPostSelection={this.handleChangingSelectedPost}/>
      buttonText = "Post something";

    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

ToggleControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};
//this makes our mainpostlist an object and not an array
const mapStateToProps = state => {
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ToggleControl = connect(mapStateToProps)(ToggleControl);

export default ToggleControl;