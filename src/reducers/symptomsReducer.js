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
    case 'UPDATE_SYMPTOM':  
      return state.map(item => item.id === action.payload.id ? action.payload : item);
    default:
      return state;
  }
};