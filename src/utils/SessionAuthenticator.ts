import {Auth} from 'aws-amplify';
import {InfoProvider} from './InfoProvider';
import {CognitoUser} from 'amazon-cognito-identity-js';
import Validate from './Validate';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth/lib/types';

export class SessionAuthenticator {
    navigator: any;

    constructor(navigator: any) {
        this.navigator = navigator;
    }

    // We can authenticate with Cognito using this information.
    async SignIn(infoProvider: InfoProvider, email?: string, password?: string) {
        
        if (infoProvider !== InfoProvider.USER) {
            const user = await this.tryFederatedSignIn(infoProvider);
        } else {
            email = Validate.email(email);
            password = Validate.password(password);

            try {
                const signInResponse = await Auth.signIn(email, password);
                const user = this.tryHandleChallenge(signInResponse);
                this.navigator.navigate("") // Go to main screen
            } catch (error) {
                this.handleAuthenticationErrors(error);
            }
        }
    }

    tryFederatedSignIn(infoProvider: InfoProvider) {
        if (infoProvider === InfoProvider.FACEBOOK) {
            // TODO: Experiment with this function
            return Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Facebook
            });
        } else {
            return new Promise((ok, err) => {
                console.error("Info provider not currently supported");
                err();
            });
        }
    }

    // When requested to complete an additional step to sign in
    tryHandleChallenge(user: any): CognitoUser|undefined {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            this.navigator.navigate('CreateNewPassword');
            return undefined;
        } else {
            // User successfully signs in
            return user;
        }
    }

    // Handle errors thrown by Cognito
    handleAuthenticationErrors(error: any) {
        if (error.code === 'UserNotConfirmedException') { // Redirect to confirmation
            
        } else if (error.code === 'PasswordResetRequiredException') {

        } else if (error.code === 'NotAuthorizedException') { // Incorrect password
            alert("Incorrect password");
        } else if (error.code === 'UserNotFoundException') {
            alert("User not found. Please check the spelling or sign up before continuing.");
        } else {
            console.error(error);
        }
    }

    // We can register an individual using Cognito with some information.
    trySignUp(email: string, password: string): Promise<any> {
        return Auth.signUp(
            {
                username: email, 
                password: password,
                attributes: {
                    email: email
                }
            })
    }

    // We need to confirm the account was sent to the correct email.
    tryConfirmAccount(email: string, code: string): Promise<any> {
        return Auth.confirmSignUp(email, code, {forceAliasCreation: false});
    }
}