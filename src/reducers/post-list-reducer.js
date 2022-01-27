export default (state = {}, action) => {
  const { title, submission, vote, timeStamp, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          submission: submission,
          vote: vote,
          timeStamp: timeStamp,
          id: id
        }
      });
    case 'INCREMENT':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          submission: submission,
          vote: vote + 1,
          timeStamp: timeStamp,
          id: id
        }
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          submission: submission,
          timeStamp: timeStamp,
          vote: vote -1,
          id: id
        }
      });
    default:
      return state;
  }
};
