import React from 'react';
import {
    Button,
    Text,
    Container
} from 'native-base';

export default class SignUpScreen extends React.Component {

    _goToSignIn = async () => {
        this.props.navigation.navigate('SignIn');
    }

    render() {
        return (
        <Container>
            <Text>SignUpScreen!</Text>
            <Button title="Go back" onPress={this._goToSignIn}>
                </Button>
        </Container>
        );
    }
}

module.exports = SignUpScreen;