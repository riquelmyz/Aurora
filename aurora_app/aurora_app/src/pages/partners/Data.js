import React, { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, Image, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Main () {
    const [ dataPartner, setActualPartner ] = useState ({ });

    async function checkActualPartner () {
        const data = await AsyncStorage.getItem ('dataPartner');

        if (data) {
            setActualPartner (JSON.parse (data));

            return true;
        }

        return false;
    }

    checkActualPartner ();

    if (dataPartner.name) {
        return (
            <SafeAreaView style = { { flex: 1, backgroundColor: '#E9E9E9' } }>
                <View style = { { flexDirection: 'row', alignItems: 'top' } }>
                    <Image style = { { resizeMode: 'contain', width: 115, height: 55 } } source = { require ('../../../assets/images/logo_other.png') }/>
                    <Text style = { { fontStyle: 'italic', fontSize: 18, textAlignVertical: 'center' } }>Aurora</Text>
                </View>

                <ScrollView>
                    <View style = { { padding: 25 } }>
                        <Image source = { require ('../../../assets/images/location.png') }/>
                        <View style = { { flex: 1, flexDirection: 'row' } }>
                            <Text style = { { alignSelf: 'flex-start', fontSize: 16, fontStyle: 'italic' } }>{ dataPartner.name }</Text>
                        </View>

                        <View style = { { flex: 1 } }>
                            <Image style = { { alignSelf: 'flex-end', top: '-110%' } } source = { dataPartner.avaliation }/>
                        </View>
                    </View>

                    <View style = { { top: '-6%' } }>
                        <View style = { { padding: 25 } }>
                            <Text style = { { fontSize: 25, fontWeight: 'bold' } }>Descrição</Text>
                            <Text style = { { fontSize: 15, flexWrap: 'wrap' } }>{ dataPartner.description }</Text>
                        </View>

                        <View style = { { padding: 25, top: '-8%' } }>
                            <Text style = { { fontSize: 25, fontWeight: 'bold' } }>Contatos</Text>

                            <View style = { { flexDirection: 'row', marginVertical: 5 } }>
                                <Image source = { require ('../../../assets/images/socials/instagram.png') }/>
                                <Text style = { { textAlignVertical: 'center', fontSize: 20, paddingHorizontal: 5 } }>{ dataPartner.about.social.instagram }</Text>
                            </View>

                            <View style = { { flexDirection: 'row', marginVertical: 5 } }>
                                <Image source = { require ('../../../assets/images/socials/facebook.png') }/>
                                <Text style = { { textAlignVertical: 'center', fontSize: 20, paddingHorizontal: 5 } }>{ dataPartner.about.social.facebook }</Text>
                            </View>

                            <View style = { { flexDirection: 'row', marginVertical: 5 } }>
                                <Image source = { require ('../../../assets/images/socials/whatsapp.png') }/>
                                <Text style = { { textAlignVertical: 'center', fontSize: 20, paddingHorizontal: 5 } }>{ dataPartner.about.social.whatsapp }</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style = { { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
            <Image style = { { resizeMode: 'contain', width: 60, height: 60 } } source = { require ('../../../assets/images/bad-review.png') }/>
            <Text style = { { textAlign: 'center', margin: 10 } }>Ocorreu um erro, contate um\nAdministrador / Desenvolvedor.</Text>
        </SafeAreaView>
    )
}