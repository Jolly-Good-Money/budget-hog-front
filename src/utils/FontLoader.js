import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Roboto from '../../node_modules/native-base/Fonts/Roboto_medium.ttf';
import Roboto_medium from '../../node_modules/native-base/Fonts/Roboto.ttf';

export default class FontLoader extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { loading: false };
      }
    
    async componentDidMount() {
    await Font.loadAsync({
        Roboto_medium,
        Roboto
    });

    this.setState({ loading: true });
    }

    render() {
        if (!this.state.loading) {
            return <AppLoading/>;
        }

        return this.props.children;
    }
}

module.exports = FontLoader;