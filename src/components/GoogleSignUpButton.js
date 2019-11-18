import React from 'react';
import { Button, Text, Image} from 'native-base';
import { withNavigation } from 'react-navigation';

class GoogleSignUpButton extends React.Component {

    _signIn = async () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Button full rounded onPress={this._signIn}>
                <Text>Sign in with Google</Text>
            </Button>
        );
    }

}

module.exports = withNavigation(GoogleSignUpButton);
