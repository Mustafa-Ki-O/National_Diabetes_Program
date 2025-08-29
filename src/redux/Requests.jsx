import { ADD_REQUEST} from "./actionType";
const initialState={
    requests:[]
};
const Requests= (state=initialState,action) => {
    switch(action.type){
        case ADD_REQUEST:
            return {...state , requests : [ ...state.requests , action.payload ]};

        default:
            return state;
    }
}
export default Requests;