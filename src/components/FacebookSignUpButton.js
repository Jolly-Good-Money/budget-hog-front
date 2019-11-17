import React from 'react';
import { Button, Text, Icon} from 'native-base';

class FacebookSignUpButton extends React.Component {

    _signIn = async () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Button full rounded iconLeft onPress={this._signIn}>
                <Icon name='logo-facebook'/>
                <Text>Continue with Facebook</Text>
            </Button>
        );
    }

}

module.exports = FacebookSignUpButton;