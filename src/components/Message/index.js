import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from '../styles';

class Message extends React.Component {
  closeMessage = () => {
    const { handleClose } = this.props;
    handleClose();
  }

  render() {
    const { title, message, show } = this.props;

    if (show) {
      return (
        <View style={styles.wrapper}>
          <View style={styles.message}>
            <Text style={styles.formError}>{message}</Text>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={this.closeMessage}>
            <Icon name="times" size={20} color="#f50057" />
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

export default Message;
