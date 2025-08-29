import { combineReducers } from "redux";
import Patients from "./patients";
import Medicins from "./medicins";
import Requests from "./Requests";

const root=combineReducers({
    patients:Patients,
    medicins:Medicins,
    requests:Requests,
})

export default root;