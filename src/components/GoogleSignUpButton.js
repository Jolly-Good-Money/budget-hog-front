import React from 'react';
import { Button, Text, Icon} from 'native-base';
import { withNavigation } from 'react-navigation';


/**
 * @deprecated Revive when integrating google sign in.
 */
class GoogleSignUpButton extends React.Component {

    _signIn = async () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Button full rounded icon onPress={this._signIn}>
                <Icon name='logo-google' />
                <Text style={{justifyContent: 'flex-start'}}>Sign in with Google</Text>
            </Button>
        );
    }

}

module.exports = withNavigation(GoogleSignUpButton);
