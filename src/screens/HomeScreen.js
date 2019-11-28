import React from 'react';
import {
    Button,
    Text,
    Container
} from 'native-base';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.goToSettings = this.goToSettings.bind(this);
    }

    async goToSettings() {
        this.props.navigation.navigate('Settings');
    }

    render() {
        return (
            <Container>
                <Text>HomeScreen!</Text>
                <Button title="Go to Settings" onPress={this.goToSettings}>
                </Button>
            </Container>
            );
    }
}

module.exports = HomeScreen;