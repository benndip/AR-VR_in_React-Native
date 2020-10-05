import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

import OutlineButton from '../../components/OutlineButton/OutlineButton.component';
import SolidButton from '../../components/SolidButton/SolidButton.component';
import styles from './Details.styles';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView1}>
          <ImageBackground
            style={styles.topImage}
            source={require('../../res/bottomListimages/food2.jpeg')}>
            <View style={styles.topViewOnImage}>
              <View style={styles.IconAndTitleView}>
                <Icon name="arrowleft" color="#ffffff" size={30} />
                <Text style={styles.titleText}>Product detail</Text>
              </View>
              <Icon name="heart" color="#ffffff" size={30} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.mainView2}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.bottomView}>
              <View style={styles.mainAndSubTextView}>
                <Text style={styles.mainText}>Blueberry Ricotto Pancakes</Text>
                <Text style={styles.subText}>
                  Fluffy ans light Blueberry Ricotta pancakes
                </Text>
              </View>
              <View style={styles.priceRatingAndTextView}>
                <View style={styles.priceAndRatingView}>
                  <Text style={styles.priceText}>500FCFA</Text>
                  <View style={styles.ratingView}>
                    <StarRating
                      disabled={false}
                      emptyStar={'ios-star-outline'}
                      fullStar={'ios-star'}
                      halfStar={'ios-star-half'}
                      iconSet={'Ionicons'}
                      maxStars={5}
                      rating={5}
                      fullStarColor={'#ffa801'}
                      starSize={15}
                    />
                  </View>
                </View>
                <View style={styles.textAndRatingView}>
                  <Text style={styles.ratingText}>Give your rating</Text>
                  <View style={styles.ratingView}>
                    <StarRating
                      disabled={false}
                      emptyStar={'ios-star-outline'}
                      fullStar={'ios-star'}
                      halfStar={'ios-star-half'}
                      iconSet={'Ionicons'}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={'#ffa801'}
                      starSize={15}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.detailsView}>
                <Text style={styles.detailTitleText}>Details</Text>
                <Text style={styles.detailText}>
                  {`This is the detail of this food that you can see above,
so make sure you like it because we are
very very happy to display this to you in this capacity.Yes this is not important`}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.readMoreText}>...Read more</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.quantityIconAndNumberView}>
                <Text style={styles.quantityText}>Quantity</Text>
                <TouchableOpacity style={styles.touch}>
                  <FontAwesome name="minus-circle" color="#576574" size={20} />
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={styles.touch}>
                  <FontAwesome name="plus-circle" color="#10ac84" size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.totalPriceView}>
                <Text style={styles.totalPriceText}>Total price</Text>
                <Text style={styles.priceText}>500FCFA</Text>
              </View>
              <View style={styles.buttonsView}>
                <OutlineButton buttonTitle="Add to cart" />
                <SolidButton buttonTitle="Place order" />
              </View>
              <View />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Details;
