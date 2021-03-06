import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationService from '../../navigation/NavigationService';
import { createPdf } from '../../utils/pdf';
import Share from 'react-native-share';
import { processing } from '../../actions';
import { getProblemLabel } from '../../utils/values';
import EmptyListMessage from '../EmptyListMessage';
import { displayName } from '../../../app.json';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../styles';

import { getComplaints } from '../../actions/user';

class ComplaintList extends React.Component {
  componentDidMount = () => {
    const { loadComplaints } = this.props;
    loadComplaints();
  }

  itemView = (item) => {
    NavigationService.navigate('ComplaintDetail', {id: item.id} );
  }

  shareComplaint = async (item) => {
    const { showProcessing, imageCache } = this.props;
    try {
      showProcessing(true);
      const file = await createPdf(item, imageCache);
      if (file.filePath) {
        Share.open({
          title: 'Compartir denuncia',
          url: `file://${file.filePath}`,
          subject: `Mi denuncia en ${displayName}`,
          message: `Denuncia reportada a través de ${displayName}.`,
        });
      }
    } catch (e) {
      console.warn('ERROR', e);
    } finally {
      showProcessing(false);
    }
  }

  render() {
    const { data, shareComplaint } = this.props;

    return (
      <SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
              <View style={styles.complaints}>
                  <TouchableHighlight onPress={() => this.itemView(item)}>
                  <View style={styles.complaintslist}>
                    <Text style={styles.titleDetail}>{getProblemLabel(item.problem)}</Text>
                    <Text style={styles.dateDetail}>{item.date}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.shareComplaint(item)}>
                  <FontAwesome5 name="share" size={15}/>
                </TouchableHighlight>
              </View>
          )}
          ListEmptyComponent={<EmptyListMessage text="No hay denuncias..." />}
        />
      </SafeAreaView>
    );
  }
}

ComplaintList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loadComplaints: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

ComplaintList.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.user.complaints,
  imageCache: state.image.cache,
});

const mapDispatchToProps = (dispatch) => ({
  loadComplaints: () => dispatch(getComplaints()),
  showProcessing: (status) => dispatch(processing(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintList);
