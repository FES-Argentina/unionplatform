import React, { PureComponent } from 'react';
import {
  Text, View, TouchableHighlight, Image,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNews } from '../../actions/news';
import NavigationService from '../../navigation/NavigationService';
import LinearGradient from 'react-native-linear-gradient';
import SafeAreaViewDecider from '../SafeAreaViewDecider'

import styles from './styles';

class Slideshow extends PureComponent {
  componentDidMount = () => {
    const { loadNews } = this.props;
    loadNews();
  }

  itemView = (item) => {
    NavigationService.navigate('NewsDetailGuest', {item} );
  }

  render() {
    const { data } = this.props;
    let items = (data.length > 5) ? data.slice(0, 5) : data;

    return (
      <View>
        <SafeAreaViewDecider statusBarHiddenForNotch={true} statusBarHiddenForNonNotch={false} backgroundColor="crimson"/>

        <SwiperFlatList
          horizontal
          showPagination
          paginationDefaultColor={'gray'}
          paginationActiveColor={'darkgray'}
          data={items}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => this.itemView(item)}>
              <View style={styles.slide}>
                <Image source={{ uri: item.image }} style={styles.itemPhoto}/>
                <Text style={styles.slideTextTitle} numberOfLines={2} ellipsizeMode={'tail'}>{item.title}</Text>
                <Text style={styles.slideText} numberOfLines={2} ellipsizeMode={'tail'}>{item.summary}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}





Slideshow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Slideshow.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.news.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadNews: () => dispatch(getNews(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);
