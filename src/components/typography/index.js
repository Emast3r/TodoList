import React, { Component } from 'react';
import { Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import colors from '../../theme/palette';


/*
* Typography component
*
* @namepace TypographyComponent
*
* */
class Typography extends Component {
	/*
    * @props {Object} propTypes - The props
    * @props {string} propTypes.color - colors palette are in /utility/palette folder
    * */

	render() {
	    const {
			children, color, size, textAlign, fontWight
		} = this.props;
		return (
			<Text style={[
				{
					color: colors[ color ],
					fontSize: moderateScale( size ),
					textAlign,
					fontWeight: fontWight
				}
			]}
			>
				{children}
			</Text>
		);
	}
}

Typography.defaultProps = {
	color: '#000',
	size: 10,
	textAlign: 'auto',
	fontWight: '400'
};


Typography.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	textAlign: PropTypes.string,
	fontWight: PropTypes.string
};

export default Typography;
