import React from 'react';
import COLORS from '../utils/Colors';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Row, Item, Label, Input, Form, Title, Grid, Button, Text } from 'native-base';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.signIn = this.signIn.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
    }

    onEmailChange(text) {
        this.setState({email: text});
    }

    onPasswordChange(text) {
        this.setState({password: text});
    }

    onConfirmPasswordChange(text) {
        if (text !== this.state.password) {
            console.warn("Passwords don't match");
        }
    }

    async signIn() {

    }

    render() {
        return(
            <Row style={styles.content}>
                <Grid>
                    <Row style={styles.titleSpace}>
                        <Title style={styles.title}>
                            <Label style={styles.titleText}>Register</Label>
                        </Title>
                    </Row>
                    <Row style={styles.interactiveSpace}>
                        <Form style={styles.formGroup}>
                            <Grid style={styles.inputSpace}>
                                <Item floatingLabel style={styles.inputBox}>
                                    <Label>Email</Label>
                                    <Input
                                        onChangeText={this.onEmailChange}
                                        blurOnSubmit={false}
                                        returnKeyType = {'next'} 
                                        onSubmitEditing = {() => {this.passwordInput._root.focus();}}
                                    />
                                </Item>
                                <Item floatingLabel style={styles.inputBox}>
                                    <Label>Password</Label>
                                    <Input
                                        onChangeText={this.onPasswordChange}
                                        secureTextEntry
                                        blurOnSubmit={false}
                                        returnKeyType = {'next'} 
                                        getRef={input => {this.passwordInput = input;}}
                                        onSubmitEditing = {() => {this.confirmPasswordInput._root.focus();}}/>
                                </Item>
                                <Item floatingLabel style={styles.inputBox}>
                                    <Label style={{ color: COLORS.WHITE }}>Confirm Password</Label>
                                    <Input
                                        secureTextEntry
                                        onChangeText={this.onConfirmPasswordChange}
                                        returnKeyType = {'go'}
                                        getRef={input => {this.confirmPasswordInput = input;}}
                                        onSubmitEditing = {this.signIn}/>
                                </Item>
                            </Grid>
                            <Button
                            block
                            bordered
                            rounded
                            light
                            style={styles.button}
                            onPress={this.signIn}
                            >
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </Button>
                        </Form>
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
    titleSpace: {
        //backgroundColor: 'yellow',
        justifyContent: 'flex-start',
        flex: 0.4,
    },
    interactiveSpace: {
        flex: 0.6,
    },
    title: {
        alignSelf: 'flex-end',
        //backgroundColor: 'red',
    },
    titleText: {
        fontSize: 44,
    },
    formGroup: {
        //backgroundColor: 'red',
        flex: 1,
    },
    inputSpace: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        //backgroundColor: 'red',
    },
    button: {
        backgroundColor: COLORS.TEAL,
        borderColor: COLORS.BLACK,
        flex: 1,
    },
    buttonText: {
        color: COLORS.BLACK, fontWeight: 'bold'
    },
    inputBox: {
        marginLeft: 0,
       //backgroundColor: 'yellow',
    },
});

module.exports = withNavigation(SignUpForm);