import React from 'react';
import { Button, Text, Icon} from 'native-base';

class GoogleSignUpButton extends React.Component {

    _signIn = async () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Button full rounded iconLeft onPress={this._signIn}>
                <Icon name='logo-google'/>
                <Text>Sign in with Google</Text>
            </Button>
        );
    }

}

module.exports = GoogleSignUpButton;