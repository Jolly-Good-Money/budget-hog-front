import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text} from 'native-base';
import { withNavigation } from 'react-navigation';
import { FacebookClient } from '../utils/FacebookClient';

// If you want to use this make sure to get the APPID from BudgetHog Discord
class FacebookSignUpButton extends React.Component {
    constructor(props) {
        super(props);

        this.signIn = this.signIn.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.onFetchSuccess = this.onFetchSuccess.bind(this);
    }

    onFailure({ error }) {
      alert(`Exception received: ${error}`);
    }

    onFetchSuccess() {
        // Set state to logged in
        this.props.navigation.navigate('Auth');
    }

    async signIn() {
        this.facebookClient = new FacebookClient();
        try {
            await this.facebookClient.initializeAsync();
            const authenticationResult = await this.facebookClient.authenticateUser();  
            const fetchInfoCall = await this.facebookClient.fetchUserInformation(authenticationResult);
            const userInfo = await fetchInfoCall.json();
        } catch (error) {
            this.onFailure(error)
        }

        this.onFetchSuccess();
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
