import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import COLORS from '../utils/Colors';
import SignUpForm from '../components/SignUpForm';
import {
    Button,
    Text,
    Container,
    Grid,
    Col,
    Row,
    Title,
    Content
} from 'native-base';

export default class SignUpScreen extends React.Component {

    _goToSignIn = async () => {
        this.props.navigation.navigate('SignIn');
    }

    render() {
        return (
        <Container>
            <StatusBar hidden />
            <Content
                contentContainerStyle={{ flexGrow: 1 }}
                style={styles.content}
            >
                <Grid>
                    <Col style={styles.left} />
                    <Col style={styles.center} >
                        <Grid>
                            <Row />
                            <Row style={styles.middleSpace}>
                                <Title style={styles.title}>BudgetHog</Title>
                                <SignUpForm />
                            </Row>
                            <Row />
                        </Grid>
                    </Col>
                    <Col style={styles.right} />
                </Grid>
            </Content>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    content: {
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
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
    middleSpace: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
    },
});

module.exports = SignUpScreen;