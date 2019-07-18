import React, { Component } from 'react';
import { View,ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Typography from '../../components/typography';
import Input from '../../components/input';
import {closeModal} from '../../navigation/helper';
import {updateTask} from '../../actions/tasks';

class Time extends Component {
    constructor() {
        super();
        this.emojis = ['🙂', '😅', '🙃', '🤩', '🤑', '🤔', '🤨', '🤥', '🤮', '🤯'];

        this.state = {
            finishedTime: ''
        };

        this.addTime = this.addTime.bind(this);
        this.back = this.back.bind(this);
        this.update = this.update.bind(this);
    }

    addTime(finishedTime){
        this.setState({finishedTime})
    }

    update(){
        const {finishedTime} = this.state;
        if(finishedTime !== ''){
            const {index, addFinishedTime, componentId} = this.props;
            addFinishedTime(index, finishedTime, componentId);
        }

    }

   async back(){
        const {componentId} = this.props;
       await closeModal(componentId)
    }
    render() {
        const {tasks, index} = this.props;
        const {finishedTime} = this.state;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.icon}>
                    <Text style={styles.emoji}>
                        {this.emojis[Math.floor(Math.random() * 10)]}
                    </Text>
                </View>
                <View style={styles.title}>
                    <Typography
                        size={20}
                        fontWight={'bold'}
                        color={'dustyOrange'}
                    >
                        {tasks[index].title}
                    </Typography>
                </View>
                <View style={styles.time}>
                    <Typography
                        size={14}
                        fontWight={'400'}
                        color={'black'}
                    >
                        {`${tasks[index].time} H`}
                    </Typography>
                </View>
                <View style={styles.description}>
                    <Typography
                        size={14}
                        color={'black'}
                    >
                        {tasks[index].description}
                    </Typography>
                </View>
                {tasks[index].hasOwnProperty('finishedTime') ? (
                    <View style={styles.endTime}>
                        <Typography
                            size={20}
                            fontWight={'bold'}
                            color={'dustyOrange'}
                        >
                            {`Tiempo trabajado`}
                        </Typography>
                        <Typography
                            size={20}
                            fontWight={'bold'}
                            color={'black'}
                        >
                            {`${tasks[index].finishedTime} H`}
                        </Typography>
                        <View style={styles.total}>
                            <Typography
                                size={20}
                                fontWight={'bold'}
                                color={'dustyOrange'}
                            >
                                {`Total`}
                            </Typography>
                            <Text style={styles.totalText}>
                                {(parseInt(tasks[index].time) - parseFloat(tasks[index].finishedTime)
                                > parseInt(tasks[index].time) ? (
                                        `${parseInt(tasks[index].time) - parseFloat(tasks[index].finishedTime)} de mas 👎`
                                ):(
                                    `${parseInt(tasks[index].time) - parseFloat(tasks[index].finishedTime)} h 👍`
                                ))}
                            </Text>
                        </View>
                    </View>
                ):(
                    <View style={styles.add}>
                        <View>
                            <Typography
                                size={20}
                                fontWight={'bold'}
                                color={'dustyOrange'}
                            >
                                {`Ingrese el tiempo trabajado`}
                            </Typography>
                        </View>
                        <View style={styles.addTime}>
                            <Input
                                onChangeText={this.addTime}
                                value={finishedTime}
                                inputStyle={styles.input}
                                containerStyle={styles.inputContainer}
                                placeholder={'Ingresar el tiempo en horas'}
                                keyboardType={'decimal-pad'}

                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableWithoutFeedback onPress={this.update}>
                                <View style={styles.button}>
                                    <Typography
                                        size={20}
                                        fontWight={'bold'}
                                        color={'white'}
                                    >
                                        {`Actualizar`}
                                    </Typography>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                )}




                <TouchableWithoutFeedback onPress={this.back}>
                    <View style={styles.backContainer}>
                        <Text style={styles.backText}>Atras</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        )
    }
}

const mapStateToProps = states => {
    return {
        tasks: states.tasks.data
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({addFinishedTime:updateTask},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Time);
