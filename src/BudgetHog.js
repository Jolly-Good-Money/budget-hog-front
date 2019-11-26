import React from 'react';
import { StatusBar } from 'react-native';
import Screen from './screens/Screens';
import FontLoader from './utils/FontLoader';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { StyleProvider } from 'native-base';

export default class BudgetHog extends React.Component {

    render() {
        const AppContainer = Screen
        return (
            <FontLoader>
                <StatusBar hidden />
                    <StyleProvider style={getTheme(material)}>
                        <AppContainer />
                    </StyleProvider>
            </FontLoader>
        );
    }
}

module.exports = BudgetHog;