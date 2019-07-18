import {Navigation} from 'react-native-navigation';
import { reduxStoreWrapper } from './helper';

import Home from '../screens/home';
import Create from '../screens/create';
import Time from '../screens/time';

export function registerScreens(store) {
    Navigation.registerComponent('Home', ()=> (props) => reduxStoreWrapper(Home,store,props),()=> Home);
    Navigation.registerComponent('Create', ()=> (props) => reduxStoreWrapper(Create,store,props),()=> Create);
    Navigation.registerComponent('Time', ()=> (props) => reduxStoreWrapper(Time,store,props),()=> Time);
}
