import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    render() {
        <View>
            <Text>
                SignUpScreen!
            </Text>
        </View>
    }
}

module.exports = SignUpScreen;