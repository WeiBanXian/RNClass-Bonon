import { AppRegistry } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import React, { Component } from 'react';
import Welcome from './jsProtected/Welcome.js';

import stores from './jsProtected/stores';
import { Provider } from 'mobx-react';

// import from 'Stack'
import { ReactStyle, Es6, Fetch, Practice, StateManage } from './jsProtected/Main/index';


const Bonon = StackNavigator({
    Welcome: { screen: Welcome },
    ReactStyle: { screen: ReactStyle },
    Es6: { screen: Es6 },
    Fetch: { screen: Fetch },
    Practice: { screen: Practice },
    StateManage: { screen: StateManage }
});


class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <Bonon />
            </Provider>
        );
    }
}


AppRegistry.registerComponent('Bonon', () => App);
