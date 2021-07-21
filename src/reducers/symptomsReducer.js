export const symptomsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SYMPTOMS":
      return action.payload;
    default:
      return state;
  }
};
