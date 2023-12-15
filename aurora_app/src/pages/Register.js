import { View, Image, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';

import Config from '../utils/Config';
import Styles from '../utils/Styles';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomProgress from '../components/CustomProgress';

import * as Animatable from 'react-native-animatable';

const style = Styles.pages.register;

export default function Register () {
    const navigation = useNavigation ();

    const { height } = useWindowDimensions ();

    const [ loading, setLoading ] = useState (false);

    const [ email, setEmail ] = useState ('');
    const [ account, setAccount ] = useState ('');
    const [ password, setPassword ] = useState ('');
    const [ confirmPassword, setConfirmPassword ] = useState ('');

    async function createAccount () {
        if (loading) {
            return Alert.alert ('Cuidado', 'Voce esta tentando fazer isso rapido demais.');
        }

        if (!email.match (/^[a-zA-Z0-9_.+-]+@[a-z]+\.[a-z]+$/)) {
            return Alert.alert ('Cuidado', 'Voce precisa indicar um e - mail valido.');
        }
        
        if (!password != '' || password.length < 6) {
            return Alert.alert ('Cuidado', 'Voce precisa criar uma senha com no minimo 6 caracteres.'); 
        }

        if (password != confirmPassword) {
            return Alert.alert ('Cuidado', 'As senhas precisam ser iguais.');
        }

        setLoading (true);

        const response = await fetch (`${Config.urlAPI}/accounts?user=${account}?email=${email}`, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
            },            
        });

        const json = await response.json ();

        if (json.length > 0) {
            setLoading (false);

            return Alert.alert ('Cuidado', 'Uma conta com esse nome de usuário ou e - mail ja existe em nosso banco de dados.');
        }

        const create = await fetch (`${Config.urlAPI}/accounts`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify ({ account: account, email: email, password: password })
        });

        if (create.status == 404) {
            setLoading (false);

            return Alert.alert ('Cuidado', 'Ocorreu um erro ao criar a conta, tente novamente mais tarde.');
        }

        setLoading (false);

        setEmail ('');
        setAccount ('');
        setPassword ('');
        setConfirmPassword ('');

        navigation.navigate ('Login');

        return Alert.alert ('Sucesso', 'Conta criada com sucesso.');
    };

    if (loading) {
        return (
            <View style = { style.container }>
                <Animatable.View animation = { 'fadeIn' } style = { { alignItems: 'center' } }>
                    <Image style = { [ style.logo, { height: (height * 0.3) } ] } source = { require ('../../assets/images/logo.png') } resizeMode = 'contain'/>
                </Animatable.View>
                
                <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Nome de usuário' } style = { style.inputs.username } value = { account } setValue = { setAccount } />
                <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'E - mail' } style = { style.inputs.username } value = { email } setValue = { setEmail } />
                <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Senha' } style = { style.inputs.password } value = { password } setValue = { setPassword } security = { true } />
                <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Confirmar senha' } style = { style.inputs.password } value = { confirmPassword } setValue = { setConfirmPassword } security = { true } />
    
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
            
            <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Nome de usuário' } style = { style.inputs.username } value = { account } setValue = { setAccount } />
            <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'E - mail' } style = { style.inputs.username } value = { email } setValue = { setEmail } />
            <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Senha' } style = { style.inputs.password } value = { password } setValue = { setPassword } security = { true } />
            <CustomInput animation = { 'fadeInUp' } delay = { 600 } placeholder = { 'Confirmar senha' } style = { style.inputs.password } value = { confirmPassword } setValue = { setConfirmPassword } security = { true } />

            <View style = { { top: '3%', alignItems: 'center' } }>
                <CustomButton animation = { 'fadeInUp' } delay = { 600 } style = { style.buttons.connect } text = { 'Registra - se' } callback = { () => { createAccount () } }/>
                <CustomButton animation = { 'fadeInUp' } delay = { 600 } style = { style.buttons.register } text = { 'Clique aqui para fazer login' } callback = { () => { navigation.navigate ('Login') } }/>
            </View>
        </View>
    );
}