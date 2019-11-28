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

        this.signIn=this.signIn.bind(this);
        this.signUp=this.signUp.bind(this);
        this.forgotPassword=this.forgotPassword.bind(this);
    }

    async signIn() {
        this.props.navigation.navigate('Auth');
    };
    
    async signUp() {
        this.props.navigation.navigate('SignUp');
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

module.exports = withNavigation(LoginForm);
