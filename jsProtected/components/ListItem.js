import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CardSection from './CardSection';

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

@connect(mapStateToProps, actions)
class ListItem extends Component {
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
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
        // TouchableWithoutFeedback
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLibrary(id)}
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
