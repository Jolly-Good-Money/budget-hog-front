import React from 'react';
import {
    Button,
    Text,
    Container
} from 'native-base';

export default class HomeScreen extends React.Component {

    _goToSettings = async () => {
        this.props.navigation.navigate('Settings');
    }

    render() {
        return (
            <Container>
                <Text>HomeScreen!</Text>
                <Button title="Go to Settings" onPress={this._goToSettings}>
                </Button>
            </Container>
            );
    }
}

module.exports = HomeScreen;