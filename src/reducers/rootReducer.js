import { combineReducers} from "redux";
import { symptomsReducer } from "./symptomsReducer";
import { usersReducer } from "./usersReducer";

//bundles multiple reducers and passes it to the store 
const rootReducer = combineReducers({
    symptoms: symptomsReducer, 
    users: usersReducer, 
})

export default rootReducer;