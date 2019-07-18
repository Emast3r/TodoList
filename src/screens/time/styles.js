import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../theme/palette';
import { Platform } from 'react-native';

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS ? '30@ms' : 0
    },
    icon: {
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30@ms'
    },
    emoji: {
        fontSize: '40@ms'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25@ms'
    },
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25@ms'
    },
    time: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25@ms'
    },
    add: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50@ms'
    },
    input: {
        width: '200@ms',
        borderWidth: 0,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.lowGray
    },
    addTime: {
        marginTop: '30@ms'
    },
    backContainer: {
        position: 'absolute',
        top: '48@ms',
        left: '10@ms',
        borderWidth: 0,
        width: '50@ms',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dustyOrange,
        borderRadius: '5@ms'
    },
    backText: {
        fontSize: '15@ms',
        color:colors.white
    },
    button:{
        borderWidth:1,
        width:'140@ms',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: '10@ms',
        backgroundColor: colors.dustyOrange
    },
    buttonContainer:{
        marginTop:'40@ms'
    },
    endTime:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'50@ms'
    },
    totalText:{
        fontSize:'15@ms',
        marginTop:'10@ms'
    },
    total:{
        marginTop:'50@ms'
    }
});

export default styles;
