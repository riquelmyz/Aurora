import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function CustomButton ({ animation, delay, style, text, callback }) {
    return (
        <Animatable.View animation = { animation } delay = { delay }>
            <TouchableOpacity onPress = { callback } style = { style.background }>
                <Text style = { style.text }>{ text }</Text>
            </TouchableOpacity>
        </Animatable.View>
    );
}