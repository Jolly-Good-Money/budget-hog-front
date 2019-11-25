import React from 'react';
import { Container, Text, Content, Row, Col, Grid, Title, View } from 'native-base';
import { StyleSheet } from 'react-native';
import FacebookSignUpButton from '../components/FacebookSignUpButton';
import LoginForm from '../components/LoginForm';
import COLORS from '../utils/Colors';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _goBack = async () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <Container>
                <Content
                    contentContainerStyle={{ flexGrow: 1 }}
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
                                            style={styles.separatingSpace}
                                        >
                                            <View style={styles.hairline}/>
                                            <Text
                                                style={styles.separatingText}
                                            >
                                                OR
                                            </Text>
                                            <View style={styles.hairline}/>
                                        </Row>
                                        <Row style={styles.thirdPartyButtons}>
                                            <FacebookSignUpButton />
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
    },
    middleSpace: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 0.4,
    },
    bottomSpace: {
        //backgroundColor: 'red',
        flex: 0.2,
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
    separatingSpace: {
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    separatingText: {
        color: COLORS.GRAY,
        flex: 0.2,
        textAlign: 'center',
        fontSize: 12,
    },
    hairline: {
        backgroundColor: COLORS.GRAY,
        height: 1,
        flex: 0.4,
    },
    thirdPartyButtons: {
        justifyContent: 'center',
    }
});
