import React from 'react';
import { withNavigation } from 'react-navigation';
import {Button, Text} from 'native-base';
import ScreenContainer from './ScreenContainer';

class ForgotScreen extends React.Component {

    render() {
        return (
            <ScreenContainer>
                <Text>ForgotScreen!</Text>
                <Button title="Go back!">
                </Button>
            </ScreenContainer>
            );
    }
}

module.exports = withNavigation(ForgotScreen);