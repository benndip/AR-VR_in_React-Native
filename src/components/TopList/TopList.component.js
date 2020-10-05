import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './TopList.style'
export class TopList extends Component {
    render() {
        const {source, foodText}=this.props
        return (
            <View style={styles.container}>
               <View style={styles.imageView}>
                <Image source={source} style={styles.image} />
               </View>
               <Text style={styles.foodText}>{foodText}</Text>
            </View>
        )
    }
}

export default TopList
