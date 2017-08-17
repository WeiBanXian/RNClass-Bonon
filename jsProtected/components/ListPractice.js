import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import * as actions from '../actions';


class ListPractice extends Component {
    renderDescription() {
        return (
            <Text style={styles.description}>
                    description
            </Text>
        );
    }

    render() {
        const { id, title } = this.props.library;
        return (
            <TouchableOpacity
                activeOpacity={0.8}>
                <View>
                    <Text style={styles.itemText}>
                        title
                    </Text>
                    {this.renderDescription()}
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = {
    itemText: {
        fontSize: 20,
        paddingLeft: 15
    },
    description: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 15,
        paddingRight: 15
    }
};


export default ListPractice;