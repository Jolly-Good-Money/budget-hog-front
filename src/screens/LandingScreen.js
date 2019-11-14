import React from 'react';
import {
    Button,
    Text,
    Container
} from 'native-base';

class LandingScreen extends React.Component {
    _signInEmail = async () => {
        this.props.navigation.navigate('SignIn');
    }

    _signInFacebook = async () => {
    }
  
    _signInGoogle = async () => {
    }

    render() {
        return (
            <Container>
                <Text>LandingScreen!</Text>
                <Button title="SignInEmail" onPress={this._signInEmail}>
                </Button>
            </Container>
            );
    }
}

module.exports = LandingScreen;