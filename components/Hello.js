const React = require('react-native');

const {
  View,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  render: function() {

    return (
      <View style={styles.container}>
        <Text>
          Hello World!
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
