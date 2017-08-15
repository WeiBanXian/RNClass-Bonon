import { AppRegistry } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import React, { Component } from 'react';
import Welcome from './jsProtected/Welcome.js';

import { ReactStyle, Es6, Fetch, Practice, StateManage } from './jsProtected/Main/index';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './jsProtected/reducers';

const Bonon = StackNavigator({
    Welcome: { screen: Welcome },
    ReactStyle: { screen: ReactStyle },
    Es6: { screen: Es6 },
    Fetch: { screen: Fetch },
    Practice: { screen: Practice },
    StateManage: { screen: StateManage }
});


class App extends Component {
    store = createStore(reducers);

    render() {
        return (
            <Provider store={this.store}>
                <Bonon />
            </Provider>
        );
    }
}


AppRegistry.registerComponent('Bonon', () => App);
