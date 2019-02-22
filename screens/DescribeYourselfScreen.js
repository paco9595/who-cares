import React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class DescribeYourselfScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Describe yourself</Text>
        <TextInput
          style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button title="submit" onPress={this._showMoreApp} />
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
