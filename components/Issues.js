const React = require('react-native');

const {
  View,
  Text,
  ListView,
  StyleSheet,
} = React;

const _ = require('lodash');

const IssueStore = require('../stores/IssueStore');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  },

  componentDidMount: function() {
    const issues = IssueStore.getIssues();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(issues)
    });
  },

  render: function() {

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTitle}
        style={styles.listView}
      />
    );
  },

  renderTitle(issue) {
    return (
      <Text style={styles.title}>
        {issue.title}
      </Text>
    );
  }
});

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    margin: 5
  },
  listView: {
    backgroundColor: '#222358',
  },
});
