import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import CardSection from './CardSection';

import { observer, inject } from 'mobx-react';


@inject('libraryStore')
@observer
class ListItem extends Component {
    renderDescription() {
        const { library } = this.props;        
        const { selected } = library;

        if (selected) {
            return (
                <CardSection>
                    <Text style={styles.description}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableOpacity
                onPress={() => this.props.libraryStore.setSelectedLibrary(id)}
                activeOpacity={0.8}>
                <View>
                    <CardSection>
                        <Text style={styles.itemText}>
                            {title}
                        </Text>
                    </CardSection>
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


export default ListItem;
