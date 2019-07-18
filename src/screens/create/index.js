import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../../components/header';
import styles from './styles';
import Typography from '../../components/typography';
import Input from '../../components/input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../../theme/palette';
import { closeModal } from '../../navigation/helper';
import { saveTask } from '../../actions/tasks';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Create extends Component {
    constructor() {
        super();
        this.isPortrait = this.isPortrait.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setTime = this.setTime.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.validateEmpty = this.validateEmpty.bind(this);
        this.back = this.back.bind(this);
        this.create = this.create.bind(this);
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
        this.state = {
            portrait: this.isPortrait(),
            title: '',
            time: '',
            description: '',
            keyboardHide: true
        }
    }

    _keyboardDidShow() {
        this.setState({keyboardHide:false})
    }

    _keyboardDidHide() {
        this.setState({keyboardHide:true})
    }

    componentDidMount() {
        Dimensions.addEventListener('change', () => {
            this.setState({
                portrait: this.isPortrait()
            });
        });
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }



    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    isPortrait() {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };

    back() {
        const { componentId } = this.props;
        closeModal(componentId)

    }

    validateEmpty() {
        const { title, description, time } = this.state;
        return title !== '' && description !== '' && time !== ''
    }

    setTitle(title) {
        this.setState({ title })
    }

    setTime(time) {
        this.setState({ time })
    }

    setDescription(description) {
        this.setState({ description });
    }

    create() {
        if (this.validateEmpty()) {
            const { save, componentId } = this.props;
            save(this.state, componentId)

        }
    }

    render() {
        const { portrait, title, time, description, keyboardHide } = this.state;
        return (
            <View style={styles.container}>
                <Header title={'Nueva Actividad'}/>

                <KeyboardAwareScrollView>
                    <View style={styles.body}>
                        <View style={styles.titleContainer}>
                            <Typography
                                color={'dustyOrange'}
                                size={20}
                                fontWight={'bold'}
                            >
                                {'Titulo de la actividad'}
                            </Typography>
                        </View>
                        <View style={[styles.inputContainer]}>
                            <Input
                                value={title}
                                onChangeText={this.setTitle}
                                inputStyle={styles.inputStyle}
                                placeholder={'Ingrese el titulo'}
                                maxLength={32}
                            />
                        </View>
                        <View style={[styles.titleContainer, styles.timeContainer]}>
                            <Typography
                                color={'dustyOrange'}
                                size={20}
                                fontWight={'bold'}
                            >
                                {'Tiempo estimado'}
                            </Typography>
                        </View>
                        <View style={[styles.inputContainer, styles.time]}>
                            <Input
                                value={time}
                                onChangeText={this.setTime}
                                inputStyle={styles.inputStyle}
                                placeholder={'Ingrese el tiempo estimado'}
                                keyboardType={'numeric'}
                            />
                            <View>
                                <Typography
                                    color={'dustyOrange'}
                                    size={10}
                                    fontWight={'bold'}
                                >
                                    {'/ Horas'}
                                </Typography>
                            </View>
                        </View>
                        <View style={styles.titleContainer}>
                            <Typography
                                color={'dustyOrange'}
                                size={20}
                                fontWight={'bold'}
                            >
                                {'Descripción'}
                            </Typography>
                        </View>
                        <View style={[styles.description]}>
                            <Input
                                value={description}
                                onChangeText={this.setDescription}
                                inputStyle={styles.input}
                                placeholder={'Ingrese la descripción'}
                                multiline={true}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                {keyboardHide ? (
                    <TouchableWithoutFeedback onPress={this.create}>
                        <View
                            style={[portrait ? styles.createButton : styles.landScapeButton,
                                !this.validateEmpty() ? { backgroundColor: colors.lowGray } : {}]}>
                            {portrait ? (

                                <View style={styles.buttonText}>
                                    <Typography
                                        color={'white'}
                                        size={20}
                                        fontWight={'bold'}
                                    >
                                        {'Crear tarea'}
                                    </Typography>
                                </View>

                            ) : (
                                this.validateEmpty() ? (

                                    <View style={styles.landContainer}>
                                        <Text style={styles.landButtonText}>
                                            +
                                        </Text>
                                    </View>

                                ) : (
                                    <View/>
                                )
                            )}

                        </View>
                    </TouchableWithoutFeedback>
                ):(
                    <View/>
                )}

                <TouchableWithoutFeedback onPress={this.back}>
                    <View style={styles.backContainer}>
                        <Text style={styles.backText}>Atras</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ save: saveTask }, dispatch);

export default connect(null, mapDispatchToProps)(Create);
