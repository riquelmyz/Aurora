import { View, Image, useWindowDimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Config from '../utils/Config';
import Styles from '../utils/Styles';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomProgress from '../components/CustomProgress';

import * as Animatable from 'react-native-animatable';

const style = Styles.pages.login;

export default function Login () {
    const navigation = useNavigation ();

    const { height } = useWindowDimensions ();

    const [ loading, setLoading ] = useState (false);

    const [ login, setLogin ] = useState ('');
    const [ password, setPassword ] = useState ('');

    async function enterAccount () {
        if (loading) {
            return false;
        }

        setLoading (true);

        const response = await fetch (`${Config.urlAPI}/accounts?user=${login}`, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json = await response.json ();

        if (json.length < 1) {
            setLoading (false);

            return Alert.alert ('Cuidado', 'Nome de usuário ou senha incorretos.');
        }

        const auth = await fetch (`${Config.urlAPI}/authenticate`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify ({
                account: login,
                email: json.email,
                password: password,

                profile: {
                    name: 'Usuário Aurora',
                    image: 1,

                    likes: [ ],
                    posts: [ ],

                    following: [ ],
                    followers: [ ],

                    role: 'default'
                },
            })
        });

        if (auth.status != 201) {
            setLoading (false);

            return Alert.alert ('Cuidado', 'Ocorreu um erro ao fazer login em nosso aplicativo, cheque sua conexao com a internet.');
        }

        await AsyncStorage.setItem ('authkey', login);

        setLoading (false);

        setLogin ('');
        setPassword ('');

        navigation.navigate ('Main');

        return Alert.alert ('Sucesso', 'Login efetuado com sucesso.');
    };

    if (loading) {
        return (
            <View style = { style.container }>
                <Animatable.View animation = { 'fadeIn' } style = { { alignItems: 'center' } }>
                    <Image style = { [ style.logo, { height: (height * 0.3) } ] } source = { require ('../../assets/images/logo.png') } resizeMode = 'contain'/>
                </Animatable.View>
                
                <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Nome de usuário ou e - mail' } style = { style.inputs.username } value = { login } setValue = { setLogin } />
                <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Senha' } style = { style.inputs.password } value = { password } setValue = { setPassword } security = { true } />
                
                <View style = { { top: '15%', 'alignItems': 'center' } }>
                    <CustomProgress animation = { 'fadeIn' } delay = { 250 } style = { style.progress } size = { 65 }/>
                </View>
            </View>
        );
    }

    return (
        <View style = { style.container }>
            <Animatable.View animation = { 'fadeIn' } style = { { alignItems: 'center' } }>
                <Image style = { [ style.logo, { height: (height * 0.3) } ] } source = { require ('../../assets/images/logo.png') } resizeMode = 'contain'/>
            </Animatable.View>
            
            <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Nome de usuário ou e - mail' } style = { style.inputs.username } value = { login } setValue = { setLogin } />
            <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Senha' } style = { style.inputs.password } value = { password } setValue = { setPassword } security = { true } />
            
            <View style = { { top: '3%', alignItems: 'center' } }>
                <CustomButton animation = { 'fadeInUp' } delay = { 600 } style = { style.buttons.connect } text = { 'Conecte - se' } callback = { () => { enterAccount () } }/>
                <CustomButton animation = { 'fadeInUp' } delay = { 600 } style = { style.buttons.register } text = { 'Clique aqui para fazer registro' } callback = { () => { navigation.navigate ('Register') } }/>
            </View>
        </View>
    );
}