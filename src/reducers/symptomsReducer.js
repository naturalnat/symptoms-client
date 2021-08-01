
export const symptomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SYMPTOMS':
      return action.payload;
    case 'ADD_SYMPTOMS': 
      return [...state, action.payload]; 
    case 'DELETE_SYMPTOM': 
  
    return [      
      ...state.filter(item => item.id !== action.payload)
     ]; 
    default:
      return state;
  }
};

//todo instead of raising an alert in the async-action, dispatch a failure (non-async)action inside the async action, that causes the web page to display an error message 