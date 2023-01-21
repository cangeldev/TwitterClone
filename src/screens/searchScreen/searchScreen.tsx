import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { Header } from '../../components'
import { Setting } from '../../assets'

export function SearchScreen() {
    return (
        <View style={style.container}>
            <Header
                isChoose='txtInput'
                centerName={Setting}
                iconName={Setting}
                placeHolderText="Twitter'da Ara"
            />

        </View>
    )
}