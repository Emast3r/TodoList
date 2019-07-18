import {GET_TASKS} from './types';
import {AsyncStorage} from 'react-native';
import {closeModal} from '../navigation/helper';
export  const actGetTasks = () => async dispatch => {
    const tasks = await AsyncStorage.getItem('tasks');
    tasks ? dispatch({
        type:GET_TASKS,
        payload:JSON.parse(tasks)
    }): dispatch({
        type:GET_TASKS,
        payload:[]
    })

};

export const saveTask = ({time,description,title}, componentId) => async dispatch => {
    const tasks = await AsyncStorage.getItem('tasks');

    if(tasks){
        const tasksArray = JSON.parse(tasks);
        console.log('tasksSaved',tasksArray);
        tasksArray.push({time,description,title});
        await AsyncStorage.setItem('tasks',JSON.stringify(tasksArray));
        dispatch({
            type:GET_TASKS,
            payload: tasksArray
        });
        await closeModal(componentId);
    }else {
        await AsyncStorage.setItem('tasks',JSON.stringify([{time,description,title}]));
        dispatch({
            type:GET_TASKS,
            payload: [{time,description,title}]
        });
        await closeModal(componentId);
    }
};

export const deleteTask = (i) => async dispatch => {
    const tasks = await AsyncStorage.getItem('tasks');
    if(tasks){
        const tasksArray = JSON.parse(tasks);
        tasksArray.splice(i,1);
        await AsyncStorage.setItem('tasks',JSON.stringify(tasksArray));
        dispatch({
            type:GET_TASKS,
            payload: tasksArray
        });

    }
};

export const updateTask = (i,time, componentId) => async  dispatch => {
    const tasks = await AsyncStorage.getItem('tasks');
    if(tasks){
        const tasksArray = JSON.parse(tasks);
        tasksArray[i].finishedTime = time;
        await AsyncStorage.setItem('tasks',JSON.stringify(tasksArray));
        dispatch({
            type:GET_TASKS,
            payload: tasksArray
        });
       await closeModal(componentId);
    }

};
