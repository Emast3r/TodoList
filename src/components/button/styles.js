import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../theme/palette';
const styles = ScaledSheet.create({
    container:{
        height:'60@ms',
        width:'60@ms',
        borderRadius:'30@ms',
        backgroundColor:colors.dustyOrange,
        position:'absolute',
        bottom:'30@ms',
        right:'25@ms',
        justifyContent:'center',
        alignItems:'center'
    },
    plus:{
        fontSize:'30@ms',
        color:colors.white
    }
});

export default styles;
