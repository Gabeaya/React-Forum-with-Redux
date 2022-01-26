import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    title: 'Daddy',
    submission: "I",
    vote: 5,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { title, submission, vote, id } = postData;
    action = {
      type: 'ADD_POST',
      title: title,
      submission: submission,
      vote: vote,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        submission: submission,
        vote: vote,
        id: id
      }
    });
  });

  test('Should successfully increment vote to mainPostList', () => {
    const { title, submission, vote, id } = postData;
    action = {
      type: 'INCREMENT',
      title: title,
      submission: submission,
      vote: vote,
      id: id
    };
    
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        submission: submission,
        vote: vote + 1,
        id: id 
      }
    });
  });
});