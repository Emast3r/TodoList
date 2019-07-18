import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/navigation';
import getStore from './src/utility/store';
import { Provider } from 'react-redux';
import colors from './src/theme/palette';
const store = getStore();
registerScreens(store, Provider);
if (__DEV__) {
    // To see all the requests in the chrome Dev tools in the network tab.
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest
        ? GLOBAL.originalXMLHttpRequest
        : GLOBAL.XMLHttpRequest;
}

const startApp = () => Navigation.events().registerAppLaunchedListener(async () => {
    await Navigation.setRoot({
        root:{
            stack:{
                id:'Home',
                children:[
                    {
                        component:{
                            name:'Home',
                            options:{
                                topBar:{
                                    visible:false,
                                    height:0,
                                },
                                statusBar:{
                                    backgroundColor: colors.dustyOrange
                                }
                            }
                        }
                    }
                ]
            }
        }
    })
});

startApp();
