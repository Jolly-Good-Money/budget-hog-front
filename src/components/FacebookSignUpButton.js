import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text} from 'native-base';
import { withNavigation } from 'react-navigation';
import CONFIG from '../../configuration_settings.json';
import { FacebookClient } from '../utils/FacebookClient';

import * as FacebookLogin from 'expo-facebook';

// If you want to use this make sure to get the APPID from BudgetHog Discord
class FacebookSignUpButton extends React.Component {
    constructor(props) {
        super(props);

        this.signIn = this.signIn.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.onFetchSuccess = this.onFetchSuccess.bind(this);
    }

    async onLoginSuccess(authenticationResult) {
        console.log(JSON.stringify(authenticationResult));
        this.facebookClient.fetchUserInformation(authenticationResult).then(this.onFetchSuccess).catch(this.onFailure)
        this.onFetchSuccess(fetchUserInfoResult)
        this.props.navigation.navigate('Auth');
    }

    onFailure({ error }) {
      alert(`Exception: ${error}`);
    }

    onFetchSuccess(fetchUserInfoResult) {
        console.log(fetchUserInfoResult.json());
    }



    async signIn() {
        this.facebookClient = new FacebookClient();
        this.facebookClient.authenticateUser().then(this.onLoginSuccess).catch(this.onFailure);
    }

    render() {
        return (
            <Button
                full
                rounded
                style={styles.button}
                onPress={this.signIn}>
                <Text>Continue with Facebook</Text>
            </Button>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        flex: 1
    }
});

module.exports = withNavigation(FacebookSignUpButton);
