import { ADD_CENTER} from "./actionType";
const initialState={
    centers:[]
};
const Centers = (state=initialState,action) => {
    switch(action.type){
        case ADD_CENTER:
            return {...state , centers : [ ...state.centers , action.payload ]};
        // case REMOVE_PATIENT:
        //     return {...state , patients : state.patients.filter((patient) => patient.id !== action.payload )}; 
        default:
            return state;
    }
}
export default Centers;