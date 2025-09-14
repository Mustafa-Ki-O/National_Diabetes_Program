import { ADD_MEDICIN, REMOVE_MEDICIN, UPDATE_MEDICIN} from "./actionType";
const initialState={
    medicins:[]
};
const Medicins= (state=initialState,action) => {
    switch(action.type){
        case ADD_MEDICIN:
            return {...state , medicins : [ ...state.medicins , action.payload ]};
        case UPDATE_MEDICIN:
            return {
              ...state,
              medicins: state.medicins.map((medicin) =>
                medicin.id === action.payload.id ? { ...medicin, ...action.payload } : medicin
              ),
            };
        case REMOVE_MEDICIN:
            return {...state , medicins : state.medicins.filter((medicin) => medicin.id !== action.payload )}; 
        default:
            return state;
    }
}
export default Medicins;