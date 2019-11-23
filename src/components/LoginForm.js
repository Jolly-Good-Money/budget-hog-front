import React from 'react';
import COLORS from '../utils/Colors';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
    Title,
    Form,
    Item,
    Icon,
    Label,
    Input,
    Row,
    Button,
    Text,
    Grid
} from 'native-base';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    _signIn = async () => {
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <Row style={styles.content}>
                <Grid>
                    <Title style={styles.title}>BudgetHog</Title>
                    <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Form style={styles.formGroup}>
                            <Item floatingLabel style={styles.inputBox}>
                                <Label style={{ color: COLORS.WHITE }}>Email</Label>
                                <Input
                                    returnKeyType = {'next'} 
                                    onSubmitEditing={() => {this.passwordInput._root.focus();}}
                                    blurOnSubmit={false}
                                />
                            </Item>
                            <Item floatingLabel style={styles.inputBox}>
                                <Label style={{ color: COLORS.WHITE }}>Password</Label>
                                <Input
                                    secureTextEntry
                                    onSubmitEditing={this._signIn}
                                    getRef={input => {this.passwordInput = input;}}/>
                            </Item>
                        </Form>
                    </Row>
                    <Row style={styles.loginButtonSpace}>
                        <Button
                            block
                            bordered
                            rounded
                            light
                            style={styles.loginButton}
                            onPress={this._signIn}
                        >
                            <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>Login</Text>
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
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    loginButton: {
        backgroundColor: COLORS.TEAL,
        alignSelf: 'flex-end',
        flex: .9,
    },
    inputBox: {
        borderRadius: 2,
        borderWidth: 10,
        borderColor: COLORS.WHITE,
        marginHorizontal: 10,
    },
    formGroup: {
        //backgroundColor: 'red',
        flex: 1
    },
});

module.exports = withNavigation(LoginForm);
