'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Hello = require('./components/Hello');

class rn_app extends Component {
  render() {
    return (
      <Hello />
    );
  }
}

AppRegistry.registerComponent('rn_app', () => rn_app);
