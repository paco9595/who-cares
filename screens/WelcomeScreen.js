import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> who cares? </Text>
        <Button title="sign in" onPress={this._showMoreApp} />
        <Button title="log in" onPress={this._showMoreApp} />
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
    justifyContent: 'center'
  },
});
