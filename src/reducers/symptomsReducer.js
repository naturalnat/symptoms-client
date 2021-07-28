
export const symptomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SYMPTOMS':
      return action.payload;
    case 'ADD_SYMPTOMS': 
      return [...state, action.payload]; 
    case 'DELETE_SYMPTOM': 
  
    return [      
       state.filter(item => item.id !== action.payload)
      ]; 
    default:
      return state;
  }
};