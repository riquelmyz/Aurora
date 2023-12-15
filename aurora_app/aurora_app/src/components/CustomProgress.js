import React from 'react';
import { View } from 'react-native';

import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';

export default function CustomProgress ({ animation, delay, style, size }) {
    return (
        <Animatable.View animation = { animation } delay = { delay }>
            <Progress.Circle color = { style.color } size = { size } borderWidth = { style.border } indeterminate = { true }/>
        </Animatable.View>
    );
}