
export const symptomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SYMPTOMS':
      return action.payload;
    case 'ADD_SYMPTOMS': 
      return [...state, action.payload]; 
    default:
      return state;
  }
};