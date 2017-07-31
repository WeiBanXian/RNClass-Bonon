import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from './jsProtected/Welcome.js';

import ReactStyle from './jsProtected/Main/ReactStyle.js';
import Es6 from './jsProtected/Main/Es6.js';
import Fetch from './jsProtected/Main/Fetch.js';
import Practice from './jsProtected/Main/Practice.js';

const Bonon = StackNavigator({
    Welcome: { screen: Welcome },
    ReactStyle: { screen: ReactStyle },
    Es6: { screen: Es6 },
    Fetch: { screen: Fetch },
    Practice: { screen: Practice },
});

AppRegistry.registerComponent('Bonon', () => Bonon);
