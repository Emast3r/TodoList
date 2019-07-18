import {EXAMPLE} from "../actions/types";
import createReducer from "../utility/createReducer";

export const exmaple = createReducer({initialState:null},{
    [EXAMPLE](state,action){
        return {
            ...state,
            ...action
        }
    }
});
