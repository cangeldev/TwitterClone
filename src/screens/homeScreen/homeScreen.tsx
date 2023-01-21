import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { Header } from '../../components'
import { Shine, Twitter } from '../../assets'

export function HomeScreen() {
    return (
        <View style={style.container}>
            <Header
                isChoose='icon'
                centerName={Twitter}
                iconName={Shine}
            />
        </View>
    )
}