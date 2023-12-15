import React from 'react';

import Routes from './src/routes';
import Styles from './src/utils/Styles';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

export default function App () {
    return (
        <NavigationContainer>
            <Routes/>
            <StatusBar style = { Styles.statusBar }/>
        </NavigationContainer>  
    );
}