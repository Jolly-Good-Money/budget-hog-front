import React from 'react';
import COLORS from '../utils/Colors';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Row, Item, Label, Input, Form } from 'native-base';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
    }

    _signIn = async () => {

    }

    render() {
        return(
            <Row style={styles.content}>
                <Form style={styles.formGroup}>
                    <Item floatingLabel style={styles.inputBox}>
                        <Label style={{ color: COLORS.WHITE }}>Email</Label>
                        <Input
                            blurOnSubmit={false}
                            returnKeyType = {'next'} 
                            onSubmitEditing={() => {this.passwordInput._root.focus();}}
                        />
                    </Item>
                    <Item floatingLabel style={styles.inputBox}>
                        <Label style={{ color: COLORS.WHITE }}>Password</Label>
                        <Input
                            secureTextEntry
                            blurOnSubmit={false}
                            returnKeyType = {'next'} 
                            getRef={input => {this.passwordInput = input;}}
                            onSubmitEditing={() => {this.confirmPasswordInput._root.focus();}}/>
                    </Item>
                    <Item floatingLabel style={styles.inputBox}>
                        <Label style={{ color: COLORS.WHITE }}>Confirm Password</Label>
                        <Input
                            secureTextEntry
                            returnKeyType = {'go'}
                            getRef={input => {this.confirmPasswordInput = input;}}
                            onSubmitEditing={this._signIn}/>
                    </Item>
                </Form>
            </Row>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
    },
});

module.exports = withNavigation(SignUpForm);