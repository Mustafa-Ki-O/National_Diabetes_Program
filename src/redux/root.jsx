import { combineReducers } from "redux";
import Patients from "./patients";
import Medicins from "./medicins";

const root=combineReducers({
    patients:Patients,
    medicins:Medicins
})

export default root;