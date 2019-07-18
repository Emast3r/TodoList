import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Typography from '../typography';
import PropTypes from 'prop-types';
class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}/>
                <View style={styles.titleContainer}>
                    <Typography
                        color={'white'}
                        fontWight={'bold'}
                        size={24}
                    >
                        {title}
                    </Typography>

                </View>
                <View style={[styles.body, styles.container]}>
                    <View style={styles.children}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        )
    }
}

Header.defaultProps = {
    title: 'Todo List',
    styleContainer: {}
};

Header.propTypes = {
    styleContainer: PropTypes.object,
    title: PropTypes.string
};
export default Header;
