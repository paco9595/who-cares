import React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class GraphScreen extends React.Component {
  static navigationOptions = {
    title: 'You',
  };
  constructor(props) {
    super(props);
    // this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Graph screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
