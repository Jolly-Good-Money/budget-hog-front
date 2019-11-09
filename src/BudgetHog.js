import React from 'react';
import Navigation from 'react-native-navigation';
const { registerScreens } = require('./screens')

export default class BudgetHog extends React.Component {

    constructor(props) {
        super(props);
        registerScreens();

        Navigation.events().registerAppLaunchedListener(() => {
            Navigation.setRoot({
                root: {
                    component: {
                    name: 'LoginScreen'
                    }
                }
            });
        });

    }

    render() {
        return (
            <Navigation />
        );
    }
}

module.exports = {
    BudgetHog
}