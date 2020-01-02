import React from 'react';
import {Button,Text, View } from 'native-base';
import ScreenContainer from './ScreenContainer';

export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    async goBack() {
        this.props.navigation.goBack();
    }

    async logOut() {
        this.props.navigation.navigate('NoAuth');
    }

    render() {
        return (
            <ScreenContainer>
                <Text>SettingsScreen!</Text>
                <Button onPress={this.goBack}>
                    <Text>Go Home</Text>
                </Button>

                <Button onPress={this.logOut}>
                    <Text>LogOut</Text>
                    </Button>
            </ScreenContainer>
            );
    }
}

module.exports = SettingsScreen;