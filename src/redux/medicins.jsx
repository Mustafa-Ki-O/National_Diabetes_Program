import { ADD_MEDICIN} from "./actionType";
const initialState={
    medicins:[]
};
const Medicins= (state=initialState,action) => {
    switch(action.type){
        case ADD_MEDICIN:
            return {...state , medicins : [ ...state.medicins , action.payload ]};

        default:
            return state;
    }
}
export default Medicins;