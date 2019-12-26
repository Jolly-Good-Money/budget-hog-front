import React from 'react';
import {Text, Row, Grid, View } from 'native-base';
import { StyleSheet } from 'react-native';
import FacebookSignUpButton from '../components/FacebookSignUpButton';
import AuthenticationForm from '../components/LoginForm';
import COLORS from '../utils/Colors';
import ScreenContainer from './ScreenContainer';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    async goBack() {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScreenContainer>
                <Grid>
                    <Row style={styles.topSpace} />
                    <AuthenticationForm style={styles.middleSpace} />
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
            </ScreenContainer>
        );
    }
}

module.exports = LoginScreen;

const styles = StyleSheet.create({
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
