import React from 'react';
import {Button,Text} from 'native-base';
import ScreenContainer from './ScreenContainer';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    async goBack() {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScreenContainer>
                <Text>New Password Screen!</Text>
                <Button title={"Go Back!"} onPress={this.goBack} />
            </ScreenContainer>
            );
    }
}

module.exports = HomeScreen;