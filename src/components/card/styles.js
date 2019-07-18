import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../theme/palette';

const styles = ScaledSheet.create({
    container: {
        borderBottomWidth: 2,
        height: '110@ms',
        flexDirection: 'row',
        borderBottomColor: colors.dustyOrange
    },
    iconContainer: {
        borderWidth: 0,
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    infoContainer: {
        borderWidth: 0,
        flex: 2
    },
    timeContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        height: '60@ms',
        width: '60@ms',
        borderWidth:1,
        borderRadius:'30@ms',
        justifyContent:'center',
        alignItems:'center',
        borderColor:colors.lowGray
    },
    titleContainer:{
        marginTop:'30@ms'
    },
    descrContainer:{
    marginTop: '14@ms'
    },
    iniTimeContainer:{

    },
    estimation:{
    justifyContent:'center',
        alignItems: 'center',
        marginTop:'4@ms'
    },
    totalContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'4@ms'
    },
    emoji:{
        fontSize:'35@ms'
    }
});

export default styles;
