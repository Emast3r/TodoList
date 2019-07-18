import {GET_TASKS} from "../actions/types";
import createReducer from "../utility/createReducer";
const init = {
    data: []
};
export const tasks = createReducer(init,{
    [GET_TASKS](state,action){
        return {
            ...state,
            data: action.payload
        }
    }
});
