import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../../components/header';
import Input from '../../components/input';
import styles from './styles';
import Card from '../../components/card';
import CustomButton from '../../components/button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { actGetTasks, deleteTask } from '../../actions/tasks';
import { showCreate,showAddTime } from '../../navigation/helper';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
        this.search = this.search.bind(this);
        this.onPressTask = this.onPressTask.bind(this);
        this.onLongPressTask = this.onLongPressTask.bind(this);
    }

    search() {

    }

   async  onPressTask(i) {
       await showAddTime({index:i});
    }

    onLongPressTask(i) {
        const { remove } = this.props;
        remove(i);
    }

    componentDidMount() {
        const { getTasks } = this.props;
        getTasks();
    }

    render() {
        const { search } = this.state;
        const { data } = this.props;
        return (
            <View style={styles.container}>

                <Header/>

                <View style={styles.body}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={data}
                        renderItem={({ item, index }) => (
                            <Card item={item} index={index}
                                  onPress={() => this.onPressTask(index)}
                                  onLongPress={() => this.onLongPressTask(index)}
                            />
                        )}
                        extraData={this.props}
                    />
                </View>

                <CustomButton action={showCreate}/>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.tasks.data
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({ getTasks: actGetTasks, remove: deleteTask }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
