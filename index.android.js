'use strict';

const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

const Issues = require('./components/Issues');
const SearchBox = require('./components/SearchBox');

var rn_app = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Issues />
        <SearchBox />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 21,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rn_app', () => rn_app);
