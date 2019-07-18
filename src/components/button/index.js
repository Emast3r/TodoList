import React, { Component } from 'react';
import { View, TouchableWithoutFeedback,Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types'

class CustomButton extends Component {
    render() {
        const {action} = this.props;
        return (
            <TouchableWithoutFeedback onPress={action}>
                <View style={styles.container}>
                    <Text style={styles.plus}>+</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

CustomButton.propTypes = {
  action: PropTypes.func.isRequired
};

export default CustomButton;
