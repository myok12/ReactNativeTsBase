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
import {SafeAreaView} from 'react-native';
import App from "./App";

export default class SafeViewApp extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <App/>
            </SafeAreaView>
        );
    }
};

