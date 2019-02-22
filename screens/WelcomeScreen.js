import React from 'react';
import {
    AsyncStorage,
    Button,
    Platform,
    ProgressBarAndroid,
    ProgressViewIOS,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { USERNAME } from '../constants/StorageKeys';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        loadingAuthStatus: true,
        progress: 0.1
    };

    timerID;

    componentDidMount() {
        const { loadingAuthStatus } = this.state;
        if (loadingAuthStatus && Platform.OS === 'ios') {
            this.timerID = setInterval(this.updateProgress, 200);
        }
        this.loadUserData();
    }

    updateProgress = () => {
        const { progress } = this.state;
        this.setState({ progress: progress >= 1 ? 0.1 : progress + 0.1 });
    };

    loadUserData = async () => {
        try {
            if (await AsyncStorage.getItem(USERNAME)) {
                this._showMoreApp();
            } else {
                this.setState({
                    loadingAuthStatus: false
                });
                clearInterval(this.timerID);
                this.timerID = null;
            }
        } catch (e) {
            console.error(e);
        }
    };

    render() {
        const { loadingAuthStatus, progress } = this.state;
        return (
            loadingAuthStatus
                ? <View style={styles.container}>
                    {Platform.OS === 'ios' ? <ProgressViewIOS progress={progress} style={styles.progress}/>
                        : <ProgressBarAndroid indeterminate/>}
                </View>
                : <View style={styles.container}>
                    <Text> who cares? </Text>
                    <Button title="sign in" onPress={this._signIn}/>
                    <Button title="log in" onPress={this._showMoreApp}/>
                </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Main');
    };

    _signIn = () => {
        this.props.navigation.navigate('SignIn');
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
    progress: {
        width: 200
    }
});
