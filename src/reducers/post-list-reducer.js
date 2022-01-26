export default (state = {}, action) => {
  const { title, submission, vote, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          submission: submission,
          vote: vote,
          id: id
        }
      });
    case 'INCREMENT':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          submission: submission,
          vote: vote + 1,
          id: id
        }
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          submission: submission,
          vote: vote -1,
          id: id
        }
      });
    default:
      return state;
  }
};
