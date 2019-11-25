import React from 'react';
import { withNavigation } from 'react-navigation';
import {
    Button,
    Text,
    Container
} from 'native-base';

class ForgotScreen extends React.Component {

    render() {
        return (
            <Container>
                <Text>ForgotScreen!</Text>
                <Button title="Go back!">
                </Button>
            </Container>
            );
    }
}

module.exports = withNavigation(ForgotScreen);