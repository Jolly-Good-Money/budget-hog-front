import React from 'react';
import COLORS from '../utils/Colors';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Title, Form, Item, Icon, Label, Input, Row, Button } from 'native-base';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    _signIn = async () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return(
            <Row style={styles.content}>
                {/* <Title style={styles.title}>BudgetHog</Title> */}
                <Form style={styles.formGroup}>
                <Item floatingLabel style={styles.inputBox}>
                    <Label style={{color: COLORS.WHITE}}>Username</Label>
                    <Input/>
                </Item>
                <Item floatingLabel style={styles.inputBox}>
                    <Label style={{color: COLORS.WHITE}}>Password</Label>
                    <Input secureTextEntry/>
                </Item>
                </Form>
                <Row style={styles.loginButtonSpace}>
                    <Button bordered style={styles.loginButton} onPress={this._signIn}>
                        <Icon name='arrow-forward' style={{color: COLORS.WHITE}}/>
                    </Button>
                </Row>
            </Row>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column'
    },
    loginButtonSpace: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    loginButton: {
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: COLORS.WHITE
    },
    inputBox : {
        borderRadius: 2,
        borderWidth: 10,
        borderColor: COLORS.WHITE,
        marginHorizontal: 10
    },
    formGroup: {
        //backgroundColor: 'yellow',
    },
});

module.exports = withNavigation(LoginForm);