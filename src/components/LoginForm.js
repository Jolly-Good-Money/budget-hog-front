import React from 'react';
import COLORS from '../utils/Colors';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
    Title,
    Form,
    Item,
    Label,
    Input,
    Row,
    Button,
    Text,
    Grid,
} from 'native-base';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    _signIn = async () => {
        this.props.navigation.navigate('Auth');
    };
    
    _signUp = async () => {
        this.props.navigation.navigate('SignUp');
    };

    _forgotPassword = async () => {
        this.props.navigation.navigate('ForgotPassword');
    }

    render() {
        return (
            <Row style={styles.content}>
                <Grid>
                    <Row style={styles.titleSpace}>
                        <Title style={styles.title}>
                            <Label style={styles.titleText}>BudgetHog</Label>
                        </Title>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Form style={styles.formGroup}>
                            <Item floatingLabel style={styles.inputBox}>
                                <Label style={{ color: COLORS.WHITE }}>Email</Label>
                                <Input
                                    returnKeyType = {'next'} 
                                    onSubmitEditing={() => {this.passwordInput._root.focus();}}
                                    blurOnSubmit={false}
                                />
                            </Item>
                            {/* Increate touchable area */}
                            <TouchableWithoutFeedback onPress={this._signUp}>
                                <Text style={styles.links}>Create Account</Text>
                            </TouchableWithoutFeedback>
                            <Item floatingLabel style={styles.inputBox}>
                                <Label style={{ color: COLORS.WHITE }}>Password</Label>
                                <Input
                                    secureTextEntry
                                    onSubmitEditing={this._signIn}
                                    getRef={input => {this.passwordInput = input;}}/>
                            </Item>
                            {/* Increate touchable area */}
                            <TouchableWithoutFeedback onPress={this._forgotPassword}>
                                <Text style={styles.links}>Forgot Password?</Text>
                            </TouchableWithoutFeedback>
                        </Form>
                    </Row>
                    <Row style={styles.loginButtonSpace}>
                        <Button
                            full
                            rounded
                            light
                            style={styles.loginButton}
                            onPress={this._signIn}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </Button>
                    </Row>
                </Grid>
            </Row>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        //backgroundColor: 'yellow',
    },
    loginButtonSpace: {
        justifyContent: 'center',
    },
    titleSpace: {
        //backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    title: {
        alignSelf: 'flex-end',
        textAlign: 'center',
        //backgroundColor: 'red',
    },
    titleText: {
        fontSize: 44,
        //backgroundColor: 'red',
    },
    loginButton: {
        backgroundColor: COLORS.TEAL,
        borderColor: COLORS.BLACK,
        alignSelf: 'flex-end',
        flex: 1,
    },
    buttonText: {
        color: COLORS.BLACK,
        fontWeight: 'bold'
    },
    inputBox: {
        marginLeft: 0,
        //backgroundColor: 'yellow',
    },
    formGroup: {
        //backgroundColor: 'red',
        flex: 1,
        justifyContent: 'flex-start',
    },
    links: {
        color: COLORS.TEAL,
        fontSize: 12,
        alignSelf: 'flex-end',
    },
});

module.exports = withNavigation(LoginForm);
