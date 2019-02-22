import React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };
  constructor(props) {
    super(props);
    // this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Events</Text>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Main');
  };

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
