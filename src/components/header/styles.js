import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';
import colors from '../../theme/palette';
const styles = ScaledSheet.create({
    container:{
        borderWidth:0,
        backgroundColor: colors.dustyOrange,

    },
    innerContainer:{
        position:'absolute',
        width:'100%',
    },
    titleContainer:{
        borderWidth: 0,
        alignItems:'center',
        marginTop: '40@ms'
    },
    body:{
        borderWidth:0,
        height: '50@ms',
        width: '100%',
        zIndex: 3
    },
    children:{
        marginTop: '10@ms'
    }
});

export default styles;
