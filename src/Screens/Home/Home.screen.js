import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import styles from './Home.style'
import { Header, Search, TopList, MiddleList, BottomList } from '../../components'
import topList from '../../res/data'
import breakfastData from '../../res/breakfastData'
import launchData from '../../res/launchData'
import dinnerData from '../../res/dinnerData'
import { WebView } from 'react-native-webview'
export class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header text="Anah!" source={require('../../res/person.webp')} />
                    <Search
                        placeholder="search products..."
                        placeholderTextColor="#000"
                        iconName="search"
                        iconSize={25}
                        iconColor="#000"
                    />
                    <Text style={styles.selectText}>Select a category</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {topList.map((item) => (
                            <TopList key={item.id} source={item.imageSource} foodText={item.foodText} />
                        ))}
                    </ScrollView>
                    <Text style={styles.selectText}>Breakfast</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {breakfastData.map((item) => (
                            <MiddleList
                                key={item.id}
                                source={item.source}
                                largeText={item.largeText}
                                smallText={item.smallText}
                                price={item.price}
                            />
                        ))}
                    </ScrollView>
                    <Text style={styles.selectText}>Lunch</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {launchData.map((item) => (
                            <MiddleList
                                key={item.id}
                                source={item.source}
                                largeText={item.largeText}
                                smallText={item.smallText}
                                price={item.price}
                            />
                        ))}
                    </ScrollView>
                    <Text style={styles.selectText}>Dinner</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {dinnerData.map((item) => (
                            <MiddleList
                                key={item.id}
                                source={item.source}
                                largeText={item.largeText}
                                smallText={item.smallText}
                                price={item.price}
                            />
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}

export default Home
