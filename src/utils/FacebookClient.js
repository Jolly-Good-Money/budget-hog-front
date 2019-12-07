import * as Facebook from 'expo-facebook';
import CONFIG from '../../configuration_settings.json';

export class FacebookClient {
    constructor() {
        this.endpoint = "https://graph.facebook.com/v5.0/me?";
        this.permissions = [
            'public_profile',
            'email'
        ];
        this.authenticateUser = this.authenticateUser.bind(this);
        this.fetchUserInformation = this.fetchUserInformation.bind(this);
    }

    authenticateUser() {
        return Facebook.logInWithReadPermissionsAsync(
            CONFIG.facebook.appId,
            { permissions: this.permissions });
    }

    fetchUserInformation(authenticationResult) {
        if (authenticationResult === null && authenticationResult.type !== 'success') {
            console.error('User not authenticated.');
            return;
        }

        const requestURL = this.endpoint.concat(`fields=id,first_name,last_name,email&access_token=${authenticationResult.token}`);

        return fetch(requestURL)
    }
}