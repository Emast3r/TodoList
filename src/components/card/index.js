import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import Typography from '../typography';

class Card extends Component {
    constructor() {
        super();
        this.emojis = ['🙂', '😅', '🙃', '🤩', '🤑', '🤔', '🤨', '🤥', '🤮', '🤯']
    }

    render() {
        const { item, index , onPress, onLongPress} = this.props;
        console.log(item);
        return (
            <TouchableWithoutFeedback
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <View style={styles.icon}>
                            <Text style={styles.emoji}>
                                {this.emojis[Math.floor(Math.random() * 10)]}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                            <Typography
                                size={14}
                                fontWight={'bold'}
                                color={'dustyOrange'}
                            >
                                {item.title}
                            </Typography>
                        </View>
                        <View style={styles.descrContainer}>
                            <Typography
                                size={14}
                                color={'black'}
                            >
                                {item.description.length > 16 ? item.description.slice(0, 16) + ' ...' : item.description}
                            </Typography>
                        </View>
                    </View>
                    <View style={styles.timeContainer}>
                        <View style={styles.estimation}>
                            <Typography
                                size={10}
                                color={'black'}
                            >
                                {'Estimado'}
                            </Typography>
                            <Typography
                                size={11}
                                color={'dustyOrange'}
                                fontWight={'bold'}
                            >
                                {`${item.time} H`}
                            </Typography>
                        </View>
                        {item.hasOwnProperty('finishedTime') ? (
                            <View style={styles.totalContainer}>
                                <Typography
                                    size={10}
                                    color={'black'}
                                >
                                    {'Total'}
                                </Typography>
                                <Typography
                                    size={11}
                                    color={'dustyOrange'}
                                    fontWight={'bold'}
                                >
                                    {parseInt(item.time) - parseFloat(item.finishedTime)}
                                </Typography>

                            </View>
                        ):(
                            <View/>
                        )}

                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Card;
