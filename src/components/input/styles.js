import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../theme/palette';
const styles = ScaledSheet.create({
    container:{
        height:'22@ms',
        backgroundColor: colors.white,

        borderRadius:'8@ms',
        justifyContent:'center',
        width: '100%'
    },
    input:{
        marginHorizontal: '5@ms',
        borderWidth: 0,
        width:'100%',
        height: '50@ms'
    }

});

export default styles;
