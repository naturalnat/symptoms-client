export const errorReducer = (state = [], action) => {
    switch (action.type) {
      case 'ERROR':
      return action.payload;
      default:
        return state;
    }
  };