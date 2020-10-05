import {StyleSheet} from 'react-native'
const styles= StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent:'center',
        borderRadius:10,
        marginRight:15,
    },
    touch: {
        width:'100%',
        height:130,
        borderRadius:5
    },
    starsAndPriceview: {
        flexDirection:'row',
        alignItems:'center'
    },
    image: {
        width:'100%',
        height:130,
        borderRadius:5
    },
    largeText:{
        color:'#2d3436',
        fontSize:16,
        fontWeight:'bold'
    },
    smallText:{
        color:'#636e72',
        fontWeight:'bold',
        fontSize:13,
    },
    starsAndPriceview: {
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
    },
    textView:{
        width:'100%',
       // backgroundColor:'blue'
       paddingHorizontal:2
    },
    priceText:{
        fontWeight:'bold',
        color:'#10ac84'
    }
   
})
export default styles