import React from 'react';
import COLORS from '../utils/Colors';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {withNavigation} from 'react-navigation';
import {SessionAuthenticator} from '../utils/SessionAuthenticator';
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
import { InfoProvider } from '../utils/InfoProvider';

class AuthenticationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.authenticator = new SessionAuthenticator(this.props.navigation);

        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
    }

    onEmailChange(text) {
        this.setState({email: text});
    }

    onPasswordChange(text) {
        this.setState({password: text});
    }

    signIn() {
        this.authenticator.SignIn(this.state.email, this.state.password, InfoProvider.USER)
    };
    
    signUp() {
        this.props.navigation.navigate('SignUp')
    };

    async forgotPassword() {
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
                                <Label>Email</Label>
                                <Input
                                    onChangeText={this.onEmailChange}
                                    returnKeyType = {'next'} 
                                    onSubmitEditing={() => {this.passwordInput._root.focus();}}
                                    blurOnSubmit={false}
                                />
                            </Item>
                            {/* Increase touchable area */}
                            <TouchableWithoutFeedback onPress={this.signUp}>
                                <Text style={styles.links}>Create Account</Text>
                            </TouchableWithoutFeedback>
                            <Item floatingLabel style={styles.inputBox}>
                                <Label>Password</Label>
                                <Input
                                    onChangeText={this.onPasswordChange}
                                    secureTextEntry
                                    onSubmitEditing={this.signIn}
                                    getRef={input => {this.passwordInput = input;}}/>
                            </Item>
                            {/* Increase touchable area */}
                            <TouchableWithoutFeedback onPress={this.forgotPassword}>
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
                            onPress={this.signIn}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </Button>
                    </Row>
                </Grid>
            </Row>
        );
    }
}

module.exports = withNavigation(AuthenticationForm);

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
        marginTop: 0,
        //backgroundColor: 'yellow',
    },
    formGroup: {
        //backgroundColor: 'red',
        flex: 1,
        justifyContent: 'flex-start',
    },
    links: {
        //backgroundColor: 'red',
        color: COLORS.TEAL,
        fontSize: 12,
        alignSelf: 'flex-end',
        flex: .2,
    },
});
