const React = require('react-native');

const {
  View,
  Text,
  StyleSheet,
  TextInput,
} = React;

module.exports = React.createClass({
  render: function() {

    return (
      <View style={styles.container}>
        <TextInput style={styles.searchInput}
          placeholder="Search..."
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    padding: 10,
    margin: 5
  },
  container: {
    // flex: 1,
    // alignSelf: 'stretch',

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#222358',
  },
});
