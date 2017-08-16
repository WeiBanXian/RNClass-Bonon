'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';

import CardSection from '../components/CardSection';
import ListItem from '../components/ListItem';

import { observer, inject } from 'mobx-react';


@inject('libraryStore')
@observer
class StateManage extends Component {
    static navigationOptions = {
		title: 'Mobx',
    };

    renderItem({ item }) {
        return <ListItem key={item.id} library={item}/>;
    }

    render() {
        // keyExtractor={(item, index) => item.id}
        let { libraries } = this.props.libraryStore;
        return (
            <View style={styles.container}>
                <FlatList
                    data={libraries}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
					ListFooterComponent={() => <View style={styles.listFoot}/>}
                    getItemLayout={(data, index) => ({length: 45, offset: 45 * index, index})}
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
    itemText: {
        marginVertical: 15,
        fontSize: 22,
        color: '#666',
        textAlign: 'center',
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



export { StateManage };