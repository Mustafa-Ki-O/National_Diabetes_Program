import { ADD_MEDICIN, REMOVE_MEDICIN} from "./actionType";
const initialState={
    medicins:[]
};
const Medicins= (state=initialState,action) => {
    switch(action.type){
        case ADD_MEDICIN:
            return {...state , medicins : [ ...state.medicins , action.payload ]};
        case REMOVE_MEDICIN:
            return {...state , medicins : state.medicins.filter((medicin) => medicin.id !== action.payload )}; 
        default:
            return state;
    }
}
export default Medicins;