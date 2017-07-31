'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';

class Menu extends Component {

    componentDidMount() {
        // this.props.navigation.navigate('Practice')
        // this.props.navigation.navigate('Fetch')
        // this.props.navigation.navigate('Es6')
        // this.props.navigation.navigate('ReactStyle')
    }

    handleGoToNextPage(page) {
        this.props.navigation.navigate(page)
    }

    renderItem (info) {
        return <TouchableOpacity
            onPress={() => {this.handleGoToNextPage(info.item.page)}}
            activeOpacity={0.7}>
            <Text key={info.item.key} style={styles.itemText}>{info.item.key}</Text>
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    removeClippedSubviews={false}
                    enableEmptySections={true}
                    renderItem={this.renderItem.bind(this)}
                    data={this.props.data}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 60,
        backgroundColor: '#F5FCFF'
    },
    itemText: {
        marginVertical: 15,
        fontSize: 22,
        color: '#666',
        textAlign: 'center',
        backgroundColor: '#F5FCFF'
    },
});


export default Menu;