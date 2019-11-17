import React from 'react';
import { Label, Form, Item, Input, Container, Icon, Button, Title, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import { Row, Col, Grid} from 'react-native-easy-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';
import COLORS from '../utils/Colors';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  _signIn = async () => {
    this.props.navigation.navigate('Auth');
  }

  _signUp = async () => {
    this.props.navigation.navigate('SignUp');
  }

  _goBack = async () => {
    this.props.navigation.goBack();
  }

  _signInGoogle = async () => {

  }

  _signInFacebook = async () => {

  }

  render() {
      return(
        <Container style={{backgroundColor: 'black'}}>
          <Grid style={styles.content}>
            <Col style={styles.left}/>
            <Col style={styles.center}>
              <Grid>
                <Row style={styles.topSpace}/>
                <Row style={styles.middleSpace}>
                  <Title style={styles.title}>BudgetHog</Title>
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
                    <Button bordered dark style={styles.loginButton} onPress={this._signIn}>
                      <Icon name='arrow-forward' style={{color: COLORS.WHITE}}/>
                    </Button>
                  </Row>
                </Row>
                <Row style={styles.bottomSpace}>
                          <Grid>
                          <Row style={styles.signUpSpace}>
                            <Text style={{color: COLORS.WHITE}}>Don't have an account?</Text>
                            <TouchableOpacity onPress={this._signUp}>
                              <Text style={styles.signUpLink}>Sign up here</Text>
                            </TouchableOpacity>
                          </Row>
                          <Row style={styles.thirdPartyButtonSpace}>
                            <Button full rounded iconLeft onPress={this._signInFacebook}>
                              <Icon name='logo-facebook'/>
                              <Text>
                                Continue with Facebook
                              </Text>
                            </Button>
                            <Button full rounded iconLeft onPress={this._signInGoogle}>
                              <Icon name='logo-google'/>
                              <Text>
                                Sign in with Google
                              </Text>
                            </Button>
                          </Row>
                          </Grid>
                        </Row>
              </Grid>
            </Col>
            <Col style={styles.right}/>
          </Grid>
        </Container>
      );
  }
}

module.exports = LoginScreen;

const styles = StyleSheet.create({
    content: {
      backgroundColor: COLORS.BLACK,
      color: COLORS.WHITE
    },
    topSpace: {
      //backgroundColor: 'blue',
      flex: 1
    },
    middleSpace: {
      flexDirection: 'column',
      alignItems: 'stretch',
      flex: 4
    },
    bottomSpace: {
      //backgroundColor: 'red',
      flex: 3
    },
    grid: {
      alignSelf: 'stretch'
    },
    formGroup: {
      //backgroundColor: 'yellow',
    },
    title: {
      fontSize: RFPercentage(8),
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    left: {
      //backgroundColor: 'yellow',
      flex: 1
    },
    center: {
      flex: 6
    },
    right: {
      //backgroundColor: 'yellow',
      flex: 1
    },
    inputBox : {
      borderRadius: 2,
      borderWidth: 10,
      borderColor: COLORS.WHITE,
      marginHorizontal: 10
    },
    signUpSpace: {
      //backgroundColor: 'green',
      flex: 3,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    thirdPartyButtonSpace : {
      flex: 8,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    thirdPartyButton: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginButtonSpace: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginButton: {
      justifyContent: 'center',
      height: 60,
      width: 60,
      borderRadius: 30,
      borderColor: COLORS.WHITE
    },
    signUpLink: {
      color: COLORS.TEAL,
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
    thirdPartyLoginText: {
      backgroundColor: 'red'
    }
  });