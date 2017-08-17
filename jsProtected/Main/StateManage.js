'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import ListItem from '../components/ListItem';


// for redux
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// for setState
import LibraryList from '../LibraryList.json';
import * as actions from '../actions';

@connect(mapStateToProps)
class StateManage extends Component {
    state = {
        libraries: LibraryList
    };

    static navigationOptions = {
		title: 'State Management',
    };

    renderItem = ({ item }) => {
        // selectLibrary={id => this.setState(actions.selectLibraryState(id))}
        return <ListItem library={item} />;
    };

    render() {
        // this.state.libraries
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.libraries}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
					ListFooterComponent={() => <View style={styles.listFoot}/>}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    listFoot: {
		borderTopWidth: 0,
		borderBottomWidth: 1,
		borderColor: '#F5F5F5'
	},
	separator: {
		borderTopWidth: 0,
		borderBottomWidth: 1,
		borderColor: '#F5F5F5'
	}
});


export default StateManage;