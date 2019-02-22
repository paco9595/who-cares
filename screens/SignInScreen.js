import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native';

import { USERNAME } from '../constants/StorageKeys';

export default class SignInScreen extends Component {
    state = {
        username: '',
        password: '',
        accessCode: '',
        auth: {}
    };

    _onChangeText = (key) => (value) => {
        this.setState({
            [key]: value
        });
    };

    _signIn = async () => {
        const {username, password} = this.state;
        if (username && password) {
            try {
                await AsyncStorage.setItem(USERNAME, username);
                this.props.navigation.navigate('Main');
            } catch (e) {
                console.error(e);
                this.setState({
                    auth: {
                        signInError: true,
                        errorMessage: ''
                    }
                });
            }
        } else {
            this.setState({
                auth: {
                    signInError: true,
                    errorMessage: 'Username and Password are required!'
                }
            });
        }
    };

    render() {
        const {
            auth: {
                isAuthenticating,
                signInError,
                errorMessage
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
                        onChangeText={this._onChangeText('username')}
                    />
                    <TextInput
                        placeholder="Password"
                        type='password'
                        onChangeText={this._onChangeText('password')}
                        secureTextEntry
                        style={styles.mT1}
                    />
                </View>
                <View style={styles.mT2}>
                    <Button
                        isLoading={isAuthenticating}
                        title='Sign In'
                        onPress={this._signIn}
                    />
                </View>
                {signInError &&
                <Text style={[styles.errorMessage]}>
                    {errorMessage ? errorMessage : 'Ops! Some error occurred'}, please try again.
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
