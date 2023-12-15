import React from 'react';
import { View, TextInput } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function CustomInput ({ animation, delay, placeholder, style, value, setValue, security }) {
    return (
        <Animatable.View animation = { animation } delay = { delay } style = { style.background }>
            <TextInput style = { style.text } placeholder = { placeholder } value = { value } onChangeText = { setValue } secureTextEntry = { security } />
        </Animatable.View>
    );
}