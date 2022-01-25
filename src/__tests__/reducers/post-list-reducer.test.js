import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    title: 'Daddy',
    submission: "I'm going to be a dad",
    vote: 5,
    id: 1
  }
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
});