import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class LandingScreen extends React.Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    render() {
        <View>
            <Text>
                LandingScreen!
            </Text>
        </View>
    }
}

module.exports = LandingScreen;