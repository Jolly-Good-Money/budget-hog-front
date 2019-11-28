import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text} from 'native-base';
import { withNavigation } from 'react-navigation';
import * as FacebookLogin from 'expo-facebook';
import config from '../../configuration_settings.json';

// If you want to use this make sure to get the APPID from BudgetHog Discord
class FacebookSignUpButton extends React.Component {
    constructor(props) {
        super(props);

        this.signIn = this.signIn.bind(this);
    }

    async signIn() {
        try {
            const {
              type,
              token,
              expires,
              permissions,
              declinedPermissions,
            } = await FacebookLogin.logInWithReadPermissionsAsync(config.facebook.appId, {
              permissions: ['public_profile','email'],
            });
            if (type === 'success') {
              // Get the user's name using Facebook's Graph API
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              alert('Logged in!', `Hi ${(await response.json()).name}!`);
              this.props.navigation.navigate('Auth');
            } else {
              alert('Cancelled');
            }
          } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
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
