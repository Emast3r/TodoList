import { combineReducers } from 'redux';
import * as  tasks from './tasks';


export default combineReducers(Object.assign({},
    tasks
))
