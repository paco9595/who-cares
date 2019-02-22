import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import classNames from 'react-native-classnames';

export default class SignInScreen extends Component {
    state = {
        username: '',
        password: '',
        accessCode: '',
        auth: {}
    };

    onChangeText = (key) => (value) => {
        this.setState({
            [key]: value
        });
    };

    signIn() {
        const {username, password} = this.state;
        // TODO
        this.setState({
            auth: {
                signInError: true
            }
        });
    }

    render() {
        const {
            auth: {
                isAuthenticating,
                signInError
            }
        } = this.state;
        return (
            <View style={styles.container}>
                <Text style={[styles.greeting]}>
                    Who Cares?
                </Text>
                <View style={styles.mT2}>
                    <TextInput
                        placeholder="User Name"
                        type='username'
                        onChangeText={this.onChangeText('username')}
                    />
                    <TextInput
                        placeholder="Password"
                        type='password'
                        onChangeText={this.onChangeText('password')}
                        secureTextEntry
                        style={styles.mT1}
                    />
                </View>
                <View style={styles.mT2}>
                    <Button
                        isLoading={isAuthenticating}
                        title='Sign In'
                        onPress={this.signIn.bind(this)}
                    />
                </View>
                <!--Text style={[styles.errorMessage, classNames(styles, {colorError: signInError})]}>
                    Some error occurred, please try again.
                </Text-->
                {signInError &&
                <Text style={[styles.errorMessage]}>
                    Ops! Some error occurred, please try again.
                </Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 12,
        marginTop: 10,
        color: 'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greeting: {
        marginTop: 20,
        fontSize: 24
    },
    colorError: {
        color: 'red'
    },
    mT1: {
        marginTop: 10
    },
    mT2: {
        marginTop: 20
    }
});
