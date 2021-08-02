import { combineReducers} from "redux";
import { errorReducer } from "./errorReducer";
import { symptomsReducer } from "./symptomsReducer";
import { usersReducer } from "./usersReducer";

//bundles multiple reducers and passes it to the store 
const rootReducer = combineReducers({
    symptoms: symptomsReducer, 
    error: errorReducer, 
    users: usersReducer, 
})

export default rootReducer;