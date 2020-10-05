import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView1: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  mainView2: {
    width: '100%',
    flex: 2,
    marginTop: -30,
    backgroundColor: 'transparent',
  },
  topImage: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
  },
  topViewOnImage: {
    width: '100%',
    height: 45,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  IconAndTitleView: {
    width: 180,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  titleText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  bottomView: {
    paddingTop: 50,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 15,
  },
  mainText: {
    fontSize: 20,
    color: '#576574',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 11,
    color: '#576574',
  },
  priceRatingAndTextView: {
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#c8d6e5',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceAndRatingView: {
    width: '50%',
    height: '100%',
  },
  priceText: {
    fontSize: 15,
    color: '#10ac84',
    fontWeight: 'bold',
  },
  ratingView: {
    marginTop: 3,
    width: '40%',
  },
  textAndRatingView: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-end',
  },
  ratingText: {
      fontSize: 12,
      color: '#8395a7',
  },
  detailsView: {
    marginTop: 16,
    width: '100%',
    paddingRight: 20,
  },
  detailTitleText: {
    fontSize: 15,
    color: '#576574',
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 15,
    color: '#576574',
    marginTop: 10,
    lineHeight: 22,
  },
  readMoreText: {
    fontSize: 12,
    color: '#ff6b6b',
    fontWeight: 'bold',
  },
  quantityIconAndNumberView: {
    width: '100%',
    height: 40,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  quantityText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222f3e',
  },
  touch: {
    marginHorizontal: 5,
  },
  totalPriceView: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  totalPriceText: {
    marginRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222f3e',
  },
  buttonsView: {
    marginTop: 40,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default styles;
