import {StyleSheet} from 'react-native'
const styles= StyleSheet.create({
    headerTextAndImage: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        //borderWidth:1
    },
    image: {
        width:45,
        height:45,
        borderRadius:5
    },
    hearderText:{
        color:'#353b48',
        fontSize: 23,
        fontWeight:'bold'

    },
    hearderTextSpecial: {
        color:'#353b48',
        fontSize: 23,
        fontWeight:'bold',
        color:'#10ac84'
    }
})
export default styles