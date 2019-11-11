import React from 'react';
import { Label, Form, Item, Input, Container, Icon, Button, Title } from 'native-base';
import { Row, Col, Grid} from 'react-native-easy-grid';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

class LoginScreen extends React.Component {
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
                <Button bordered dark style={styles.button}>
                  <Icon name='arrow-forward'/>
                </Button>
              </Row>
              <Row style={styles.floorSpace} />
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
      backgroundColor: '#69F3B8',
    },
    topSpace: {
      //backgroundColor: 'red',
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
      //ackgroundColor: 'yellow',
    },
    title: {
      fontSize: moderateScale(40, 0.2),
      color: 'black',
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
      borderBottomColor: 'black'
    },
    buttonSpace: {
      flex:1,
      //backgroundColor: "yellow",
      alignItems: 'center',
      justifyContent: 'center'
    },
    floorSpace : {
      flex: 2
    }, 
    button: {
      justifyContent: 'center',
      height: 60,
      width: 60,
      borderRadius: 30
    }
  });