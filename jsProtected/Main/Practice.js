'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';

import ListPractice from '../components/ListPractice';
import LibraryList from '../LibraryList.json';

/**********TODO********/
class Practice extends Component {
	state = {
        libraries: LibraryList
    }

	renderItem = ({ item }) => {
        return <ListPractice library={item} />;
	};

	render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.libraries}
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


export default Practice;