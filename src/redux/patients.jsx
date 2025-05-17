import { ADD_PATIENT, REMOVE_PATIENT} from "./actionType";
const initialState={
    patients:[]
};
const Patients = (state=initialState,action) => {
    switch(action.type){
        case ADD_PATIENT:
            return {...state , patients : [ ...state.patients , action.payload ]};
        case REMOVE_PATIENT:
            return {...state , patients : state.patients.filter((patient) => patient.id !== action.payload )}; 
        default:
            return state;
    }
}
export default Patients;