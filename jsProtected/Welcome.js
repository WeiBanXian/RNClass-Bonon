import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Menu from './Main/Menu.js';

class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Class 4',
    };
    render() {
        const { navigate } = this.props.navigation;
        return <View style={styles.container}>
            <Menu data={[
                {key: "React Style", page: 'ReactStyle'},
                {key: "es6", page: 'Es6'},
                {key: "fetch", page: 'Fetch'},
                {key: "practice", page: 'Practice'}
            ]} {...this.props}/>
            <Text style={styles.auther}>韦浩东 Bonon</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    auther: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        fontSize: 14,
        color: '#AAA'
    }
})

export default Welcome;