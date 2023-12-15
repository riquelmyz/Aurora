import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState } from 'react';

import Home from '../pages/Home';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';

import PartnerData from '../pages/partners/Data.js';

const Stack = createNativeStackNavigator ();

export default function Routes () {
    const [ isLogged, setLogged ] = useState (false);

    async function checkLogged () {
        try {
            await AsyncStorage.removeItem ('authkey');
            let authkey = await AsyncStorage.getItem ('authkey');

            setLogged (authkey);
        } catch (e) {
            console.log (`Falha ao resgatar o authey: ${e}`);
        }
    }

    checkLogged ();

    if (isLogged) {
        return (
            <Stack.Navigator>
                <Stack.Screen name = 'Main' component = { Main } options = { { headerShown: false } }/>
                <Stack.Screen name = 'PartnerData' component = { PartnerData } options = { { headerShown: false } }/>
            </Stack.Navigator>
        );
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component = { Home } options = { { headerShown: false } }/>

            <Stack.Screen name = 'Login' component = { Login } options = { { headerShown: false } }/>
            <Stack.Screen name = 'Register' component = { Register } options = { { headerShown: false } }/>
            
            <Stack.Screen name = 'Main' component = { Main } options = { { headerShown: false } }/>
            <Stack.Screen name = 'PartnerData' component = { PartnerData } options = { { headerShown: false } }/>
        </Stack.Navigator>
    )
}