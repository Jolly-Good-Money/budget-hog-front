import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../utils/Colors';
import {Container, Content, Col, Grid} from 'native-base';

export default class ScreenContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Content
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <Grid style={styles.content}>
                        <Col style={styles.left} />
                        <Col style={styles.center}>
                            {this.props.children}
                        </Col>
                        <Col style={styles.right} />
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
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
});