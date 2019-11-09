import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    render() {
        <View>
            <Text>
                SettingsScreen!
            </Text>
        </View>
    }
}

module.exports = SettingsScreen;