import { Text, Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useState } from 'react';

import Styles from '../utils/Styles';
import RenderPage from '../components/CustomPage';

const style = Styles.pages.main;

const pages = [
    { name: 'Feed', on: require ('../../assets/images/navbar/feed-on.png'), off: require ('../../assets/images/navbar/feed-off.png') },
    { name: 'Search', on: require ('../../assets/images/navbar/search-on.png'), off: require ('../../assets/images/navbar/search-off.png') },
    
    { name: 'Maps', on: require ('../../assets/images/navbar/map-on.png'), off: require ('../../assets/images/navbar/map-off.png') },

    { name: 'Partner', on: require ('../../assets/images/navbar/partner-on.png'), off: require ('../../assets/images/navbar/partner-off.png') },
];

export default function Main () {
    const [ actualPage, setActualPage ] = useState (pages[0].name);

    async function changeActualPage (page) {
        if (! (page != actualPage)) {
            return false;
        }

        return setActualPage (page);
    }

    return (
        <SafeAreaView style = { style.page.container }>
            <View style = { { flexDirection: 'row', alignItems: 'top' } }>
                <Image style = { { resizeMode: 'contain', width: 115, height: 55 } } source = { require ('../../assets/images/logo_other.png') }/>
                <Text style = { { fontStyle: 'italic', fontSize: 18, textAlignVertical: 'center' } }>Aurora</Text>
            </View>

            <View style = { style.page[(style.page[actualPage.toLowerCase ()] && actualPage.toLowerCase () || 'container')] }>
                <RenderPage page = { actualPage }/>
            </View>

            <View style = { style.navbar }>
                {
                    pages.map (data => {
                        if (actualPage != data.name) {
                            return (
                                <TouchableOpacity key = { `${data.name}:off` } onPress = { () => changeActualPage (data.name) }>
                                    <Image style = { { paddingHorizontal: 10, margin: 40, marginVertical: 5, top: (data.name == 'Search' && '8%' || '0%') } } source = { data.off }/>
                                </TouchableOpacity>
                            )
                        }

                        return (
                            <TouchableOpacity key = { `${data.name}:on` } onPress = { () => changeActualPage (data.name) }>
                                <Image style = { { paddingHorizontal: 10, margin: 40, marginVertical: 5, top: (data.name == 'Search' && '8%' || '0%') } } source = { data.on }/>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    );
}