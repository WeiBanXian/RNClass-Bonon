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
import CardSection from '../components/CardSection';
import ListItem from '../components/ListItem';

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

@connect(mapStateToProps)
class StateManage extends Component {
    static navigationOptions = {
		title: 'State Management',
    };

    renderItem({ item }) {        
        console.log(item.id)
        return <ListItem key={item.id} library={item} />;
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    removeClippedSubviews={false}
                    enableEmptySections={true}
                    renderItem={this.renderItem}
                    data={this.props.libraries}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
					ListFooterComponent={() => <View style={styles.listFoot}/>}
                    getItemLayout={(data, index) => ( {length: 45, offset: 45 * index, index} )}
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



export { StateManage};