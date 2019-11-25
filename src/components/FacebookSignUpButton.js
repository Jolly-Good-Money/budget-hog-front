import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text} from 'native-base';
import { withNavigation } from 'react-navigation';

class FacebookSignUpButton extends React.Component {

    _signIn = async () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Button
                full
                rounded
                style={styles.button}
                onPress={this._signIn}>
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
