import React from 'react';
import {Button,Text} from 'native-base';
import ScreenContainer from './ScreenContainer';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.goToSettings = this.goToSettings.bind(this);
        this.goToPlaid = this.goToPlaid.bind(this);
    }

    async goToSettings() {
        this.props.navigation.navigate('Settings');
    }

    async goToPlaid() {
        this.props.navigation.navigate('Plaid');
    }

    render() {
        return (
            <ScreenContainer>
                <Text>HomeScreen!</Text>
                <Button title="settings" onPress={this.goToSettings}/>
                <Button title="connect-with-banks" onPress={this.goToPlaid}/>
            </ScreenContainer>
        );
    }

}

module.exports = HomeScreen;