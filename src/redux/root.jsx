import { combineReducers } from "redux";
import Patients from "./patients";

const root=combineReducers({
    patients:Patients
})
export default root;