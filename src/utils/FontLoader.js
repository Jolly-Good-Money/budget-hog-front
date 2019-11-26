import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Roboto from '../../assets/fonts/Roboto_medium.ttf';
import Roboto_medium from '../../assets/fonts/Roboto.ttf';
import AlfaSlabOne_regular from '../../assets/fonts/AlfaSlabOne_Regular.ttf';
import Montserrat_medium from '../../assets/fonts/Montserrat_Medium.ttf';

export default class FontLoader extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { loading: false };
      }
    
    async componentDidMount() {
    await Font.loadAsync({
        Roboto_medium,
        Roboto,
        AlfaSlabOne_regular,
        Montserrat_medium,
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