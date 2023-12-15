import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import * as Animatable from 'react-native-animatable';

import Styles from '../utils/Styles';

const style = Styles.pages.home;

export default function Home () {
    const navigation = useNavigation ();

    return (
        <View style = { Styles.container }>
            <View style = { style.logo }>
                <Animatable.Image animation = { 'flipInY' } source = { require ('../../assets/images/logo.png') } resizeMode = 'contain'/>
            </View>

            <Animatable.View delay = { 600 } animation = { 'fadeInUp' } style = { style.form }>
                <TouchableOpacity style = { style.buttons.login.background } onPress = { () => navigation.navigate ('Login') }>
                    <Text style = { style.buttons.login.text }>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = { () => navigation.navigate ('Register') }>
                    <Text style = { style.buttons.register }>Caso nao tenha uma conta, clique aqui para se registrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}