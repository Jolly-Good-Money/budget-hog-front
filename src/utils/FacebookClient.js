import * as Facebook from 'expo-facebook';
import CONFIG from '../../configuration_settings.json';

export class FacebookClient {
    constructor() {
        this.endpoint = "https://graph.facebook.com/v5.0/me?";
        this.permissions = [
            'public_profile',
            'email'
        ];

        this.initializeAsync = this.initializeAsync.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);
        this.fetchUserInformation = this.fetchUserInformation.bind(this);
    }

    initializeAsync() {
        return Facebook.initializeAsync(CONFIG.facebook.appId, CONFIG.appName);
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