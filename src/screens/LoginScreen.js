import React from 'react';
import { Container, Text, Content, Row, Col, Grid, Title } from 'native-base';
import { StyleSheet, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginForm from '../components/LoginForm';
import COLORS from '../utils/Colors';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _signUp = async () => {
        this.props.navigation.navigate('SignUp');
    };

    _goBack = async () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <Container>
                <StatusBar hidden />
                <Content
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={styles.content}
                >
                    <Grid style={styles.content}>
                        <Col style={styles.left} />
                        <Col style={styles.center}>
                            <Grid>
                                <Row style={styles.topSpace} />
                                <LoginForm style={styles.middleSpace} />
                                <Row style={styles.bottomSpace}>
                                    <Grid>
                                        <Row
                                            style={styles.signUpSpace}
                                        >
                                            <Text
                                                style={{ color: COLORS.WHITE }}
                                            >
                                                Don't have an account?
                                            </Text>
                                            <TouchableOpacity
                                                onPress={this._signUp}
                                            >
                                                <Text style={styles.signUpLink}>
                                                    Sign up here
                                                </Text>
                                            </TouchableOpacity>
                                        </Row>
                                    </Grid>
                                </Row>
                            </Grid>
                        </Col>
                        <Col style={styles.right} />
                    </Grid>
                </Content>
            </Container>
        );
    }
}

module.exports = LoginScreen;

const styles = StyleSheet.create({
    content: {
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
    },
    topSpace: {
        //backgroundColor: 'blue',
        flex: 0.4,
        flexGrow: 0.4
    },
    middleSpace: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 0.5,
    },
    bottomSpace: {
        //backgroundColor: 'red',
        flex: 0.1,
    },
    grid: {
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    left: {
        //backgroundColor: 'yellow',
        flex: 1,
    },
    center: {
        flex: 6,
    },
    right: {
        //backgroundColor: 'yellow',
        flex: 1,
    },
    signUpSpace: {
        //backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpLink: {
        color: COLORS.TEAL,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});
