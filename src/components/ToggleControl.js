import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';

class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({
      mainPostList: newMainPostList,
      formVisibleOnPage:false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost});
  }

  handleDownVote = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id ===id)[0];
    selectedPost.vote -=1;
    console.log(selectedPost)
    this.setState({selectedPost: selectedPost});
  }

  handleUpVote = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id ===id)[0];
    selectedPost.vote +=1;
    console.log(selectedPost)
    this.setState({selectedPost: selectedPost}); 
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.state.selectedPost} onClickingDownVote={this.handleDownVote}onClickingUpVote={this.handleUpVote}/>
      buttonText = "back to posts";
    } else if(this.state.formVisibleOnPage) {
      currentlyVisibleState= <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>
      buttonText = "Back to posts";
    } else{
      currentlyVisibleState= <PostList postList={this.state.mainPostList} onPostSelection={this.handleChangingSelectedPost}/>
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

ToggleControl = connect()(ToggleControl);

export default ToggleControl;