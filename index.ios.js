import { AppRegistry } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import React, { Component } from 'react';
import Welcome from './jsProtected/Welcome.js';

import Main from './jsProtected/Main';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './jsProtected/reducers';

const Bonon = StackNavigator({
    Welcome: { screen: Welcome },
    ReactStyle: { screen: Main.ReactStyle },
    Es6: { screen: Main.Es6 },
    Fetch: { screen: Main.Fetch },
    Practice: { screen: Main.Practice },
    StateManage: { screen: Main.StateManage }
});

// createStore(counter, 42);初始值

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
