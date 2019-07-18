import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';


class Input extends Component {
    constructor() {
        super();
        this.state = {
            height: moderateScale(20)
        };
        this.updateSize = this.updateSize.bind(this);
    }

    updateSize(height) {
        this.setState({
            height: moderateScale(height)
        });
    };

    render() {
        const { placeholder, multiline, inputStyle, onChangeText,value,maxLength,keyboardType, containerStyle } = this.props;
        return (
            <View style={[styles.container,containerStyle]}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    style={[styles.input,inputStyle]}
                    placeholder={placeholder}
                    multiline={multiline}
                    onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                />
            </View>
        )
    }
}

Input.defaultProps = {
    placeholder: 'Buscar Actividad',
    multiline: false,
    inputStyle:{},
    maxLength: 1000,
    keyboardType:'email-address',
    containerStyle:{}
};

Input.propTypes = {
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    inputStyle: PropTypes.object,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    maxLength : PropTypes.number,
    keyboardType: PropTypes.string,
    containerStyle: PropTypes.object
};
export default Input
