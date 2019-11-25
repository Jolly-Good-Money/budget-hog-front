import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Screen from './screens/Screens';
import FontLoader from './utils/FontLoader';

export default class BudgetHog extends React.Component {

    render() {
        const AppContainer = Screen
        return (
            <FontLoader>
                <StatusBar hidden />
                <AppContainer />
            </FontLoader>
        );
    }
}

module.exports = BudgetHog;