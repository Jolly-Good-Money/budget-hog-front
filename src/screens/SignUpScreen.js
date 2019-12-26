import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import COLORS from '../utils/Colors';
import SignUpForm from '../components/SignUpForm';
import {Text,Grid,Row} from 'native-base';
import ScreenContainer from './ScreenContainer';

export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);

        this.goToSignIn = this.goToSignIn.bind(this);
    }

    async goToSignIn() {
        this.props.navigation.navigate('SignIn');
    }

    render() {
        return (
        <ScreenContainer>
            <Grid>
                <Row style={styles.topSpace}/>
                <SignUpForm style={styles.middleSpace}/>
                <Row style={styles.bottomSpace}>
                    <Grid style={{alignItems: 'center'}}>
                        <Row style={styles.textArea}>
                            <Text style={styles.text}>By continuing, you agree to our</Text>
                        </Row>
                        <Row style={styles.textArea}>
                            <TouchableWithoutFeedback>
                                <Text style={styles.link}>Terms of Service</Text>
                            </TouchableWithoutFeedback>
                            <Text style={styles.text}> and </Text>
                            <TouchableWithoutFeedback>
                                <Text style={styles.link}>Privacy Policy</Text>
                            </TouchableWithoutFeedback>
                            <Text style={styles.text}>.</Text>
                        </Row>
                    </Grid>
                </Row>
            </Grid>
        </ScreenContainer>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    topSpace: {
        flex: 0.2,
        flexShrink: 0.1,
        //backgroundColor: 'yellow',
    },
    middleSpace: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 0.5,
    },
    bottomSpace: {
        //backgroundColor: 'red',
        flexDirection: 'column',
        flex: 0.3,
    },
    textArea: {
        height: 15,
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        color: COLORS.GRAY,
        //backgroundColor: 'red',
    },
    signUpSpace: {
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    link: {
        color: COLORS.YELLOW,
        fontSize: 12,
        textDecorationLine: 'underline',
    },
});

module.exports = SignUpScreen;