import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../theme/palette';
const styles = ScaledSheet.create({
    container:{
      flex:1
    },
    body:{
        flex:1,
    },
    titleContainer:{
        alignItems:'center',
        marginTop:'30@ms',
    },
    inputContainer:{
        alignItems:'center',
        marginTop: '20@ms',
        borderWidth:0,
        marginHorizontal:'35@ms'
    },
    timeContainer:{
        marginTop:'50@ms'
    },
    time:{
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:'50@ms',
    },
    description:{
        borderWidth:1,
        height:'100@ms',
        justifyContent:'center',
        marginHorizontal: '20@ms',
        borderRadius:'10@ms',
        marginTop:'20@ms',
        marginBottom:'50@ms',
        borderColor:colors.lowGray
    },
    boxContainer:{
        borderWidth: 0,
        height:'100@ms',


    },
    input:{
        height: '100@ms',
        borderWidth:0,
        borderRadius:'20@ms',
        alignItems:'center',
        textAlign:'auto'
    },
    inputStyle:{
        borderWidth:0,
        textAlign: 'center'
    },
    createButton:{
        position:'absolute',
        bottom:0,
        height:'80@ms',
        width:'100%',
        borderWidth:0,
        backgroundColor:colors.dustyOrange,
        alignItems:'center',
    },
    landScapeButton:{
        position: 'absolute',
        top:'20@ms',
        right:'40@ms',
        height:'50@ms',
        width: '50@ms',
        borderRadius:'25@ms',
        backgroundColor: colors.white,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        marginTop:'15@ms'
    },
    landButtonText:{
        fontSize:'20@ms',
        fontWeight: 'bold',
        color:colors.dustyOrange
    },
    landContainer:{

    },
    backContainer:{
        position:'absolute',
        top:'48@ms',
        left:'10@ms',
        borderWidth:0,
        width:'50@ms',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.white,
        borderRadius:'5@ms'
    },
    backText:{
        fontSize: '15@ms',
        color:colors.dustyOrange
    }
});

export default styles;
