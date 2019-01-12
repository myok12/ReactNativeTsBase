/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import AnalyticsManager from "./AnalyticsManager";

interface Props {
}

interface State {
    loadedEverything: boolean;
}

export default class App extends Component<Props, State> {
    state: State = {
        loadedEverything: false,
    };

    componentDidMount = async () => {
        await this.loadAll();
        AnalyticsManager.setScreen("typing");
    };

    loadAll = async () => {
        // AsyncStorage.clear();
        this.setState({loadedEverything: true});
    };

    render() {
        const {loadedEverything} = this.state;
        if (!loadedEverything) {
            return (
                <ActivityIndicator style={{flex: 1}} size="large" color="#0000ff"/>
            );
        }
            return (
                <View style={styles.container}>
                    <View style={styles.topRow}>
                        <Text>Hello</Text>
                    </View>
                    <View style={styles.bottomRow}>
                        <Text>World</Text>
                    </View>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        paddingTop: 10,
        paddingBottom: 50,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    bottomRow: {
        paddingTop: 10,
        flex: 1,
    },
});
