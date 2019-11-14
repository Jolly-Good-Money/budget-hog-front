import React from 'react';
import {
    Button,
    Text,
    Container
} from 'native-base';

export default class SettingsScreen extends React.Component {

    _goBack = async () => {
        this.props.navigation.goBack();
    }

    _logOut = async () => {
        this.props.navigation.navigate('NoAuth');
    }

    render() {
        return (
            <Container>
                <Text>SettingsScreen!</Text>
                <Button onPress={this._goBack}>
                    <Text>Go Home</Text>
                </Button>

                <Button onPress={this._logOut}>
                    <Text>LogOut</Text>
                    </Button>
            </Container>
            );
    }
}

module.exports = SettingsScreen;