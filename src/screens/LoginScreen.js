import React from 'react';
import { Label, Form, Item, Input, Container, Icon, Button, Title, Text } from 'native-base';
import { Row, Col, Grid} from 'react-native-easy-grid';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../utils/Colors';

class LoginScreen extends React.Component {

  _signIn = async () => {
    this.props.navigation.navigate('Auth');
  }

  _signUp = async () => {
    this.props.navigation.navigate('SignUp');
  }

  _goBack = async () => {
    this.props.navigation.goBack();
  }

  render() {
      return(
        <Container style={{backgroundColor: 'black'}}>
          <Grid style={styles.content}>
            <Row style={styles.topSpace}/>
            <Row style={styles.middleSpace}>
              <Grid>
                <Col style={styles.left}/>
                <Col style={styles.center}>
                  <Title style={styles.title}>BudgetHog</Title>
                  <Form style={styles.formGroup}>
                    <Item floatingLabel style={styles.inputBox}>
                      <Label>Username</Label>
                      <Input/>
                    </Item>
                    <Item floatingLabel style={styles.inputBox}>
                      <Label>Password</Label>
                      <Input secureTextEntry/>
                    </Item>
                  </Form>
                </Col>
                <Col style={styles.right}/>
              </Grid>
            </Row>
            <Row style={styles.bottomSpace}>
              <Grid>
              <Row style={styles.buttonSpace}>
                <Button bordered dark style={styles.button} onPress={this._signIn}>
                  <Icon name='arrow-forward'/>
                </Button>
              </Row>
              <Row style={styles.floorSpace}>
                <TouchableOpacity onPress={this._signUp}>
                  <Text style={styles.createAccountLink}>Create an Account</Text>
                </TouchableOpacity>
              </Row>
              </Grid>
            </Row>
          </Grid>
        </Container>
      );
  }
}

module.exports = LoginScreen;

const styles = ScaledSheet.create({
    content: {
      backgroundColor: COLORS.TEAL,
    },
    topSpace: {
      //backgroundColor: 'blue',
      flex: 1
    },
    middleSpace: {
      flexDirection: 'column',
      alignItems: 'stretch',
      flex: 2
    },
    bottomSpace: {
      //backgroundColor: 'red',
      flex: 2
    },
    grid: {
      alignSelf: 'stretch'
    },
    formGroup: {
      //backgroundColor: 'yellow',
    },
    title: {
      fontSize: moderateScale(40, 0.2),
      color: COLORS.BLACK,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    left: {
      flex: moderateScale(1, 0.3)
    },
    center: {
      flex: 6
    },
    right: {
      flex: moderateScale(1, 0.3)
    },
    inputBox : {
      borderColor: COLORS.BLACK,
      borderRadius: 2,
      borderWidth: 10,
    },
    buttonSpace: {
      flex:1,
      //backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center'
    },
    floorSpace : {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center'
    }, 
    button: {
      justifyContent: 'center',
      height: 60,
      width: 60,
      borderRadius: 30
    },
    createAccountLink: {
      textAlign: 'center',
      textDecorationLine: 'underline'
    }
  });