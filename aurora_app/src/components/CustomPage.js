import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import Styles from '../utils/Styles';

import partners from '../database/partners.js';

const style = Styles.pages;

export default function RenderPage ({ page }) {
    const navigation = useNavigation ();

    if (page == 'Feed') {
        const posts = [ ];

        if (posts.length > 0) {
            return (
                <View style = { [ style[page], { height: '100%' } ] }>
                    <ScrollView>
                        {
                            posts.map ((data, key) => {
                                return (
                                    <Text key = { key.toString () } style = { { backgroundColor: '#9B6EF3', padding: 10, margin: 5 } }>{ data.name }</Text>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            )
        }

        return (
            <View style = { { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                <Image style = { { resizeMode: 'contain', width: 60, height: 60 } } source = { require ('../../assets/images/bad-review.png') }/>
                <Text style = { { margin: 15 } }>Não há nenhuma publicação aqui.</Text>
            </View>
        )
    }

    if (page == 'Partner') {
        async function goPartner (data) {
            const exists = await AsyncStorage.getItem ('dataPartner');
            if (exists) await AsyncStorage.removeItem ('dataPartner');

            await AsyncStorage.setItem ('dataPartner', JSON.stringify (data));

            return navigation.navigate ('PartnerData');
        }

        if (partners.length > 0) {
            return (
                <SafeAreaView style = { [ style[page], { height: '100%' } ] }>
                    <Text style = { { padding: 10, margin: 5, fontSize: 16, fontStyle: 'italic', textAlign: 'center' } }>Parceiros oficiais do Aurora</Text>

                    <ScrollView>
                        {
                            partners.map ((data, key) => {
                                return (
                                    <View style = { { backgroundColor: '#9B6EF3', padding: 10, margin: 5, height: 50, borderRadius: 8 } }>
                                        <TouchableOpacity onPress = { () => { goPartner (data) } }>
                                            <Text key = { `text:${ key.toString () }:partner` } style = { { height: 25, textAlignVertical: 'center' } }>{ data.name }</Text>
                                            <Image key = { `image:${ key.toString () }:partner` } style = { { resizeMode: 'contain', marginLeft: '70%', top: '-48%' } } source = { data.avaliation }/>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </SafeAreaView>
            )
        }

        return (
            <SafeAreaView style = { { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                <Image style = { { resizeMode: 'contain', width: 60, height: 60 } } source = { require ('../../assets/images/bad-review.png') }/>
                <Text style = { { margin: 15 } }>Não há nenhum parceiro aqui.</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style = { { paddingVertical: 20, alignItems: 'center', justifyContent: 'center' } }>
            <Image style = { { resizeMode: 'contain', width: 60, height: 60 } } source = { require ('../../assets/images/settings.png') }/>
            <Text style = { { margin: 15 } }>Em desenvolvimento</Text>
        </SafeAreaView>
    )
}