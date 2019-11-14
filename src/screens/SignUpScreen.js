import React from 'react';
import {
    Button,
    Text,
    Container
} from 'native-base';

export default class SignUpScreen extends React.Component {

    _goToLanding = async () => {
        this.props.navigation.navigate('Landing');
    }

    render() {
        return (
        <Container>
            <Text>SignUpScreen!</Text>
            <Button title="Go back" onPress={this._goToLanding}>
                </Button>
        </Container>
        );
    }
}

module.exports = SignUpScreen;