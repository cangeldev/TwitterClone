import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { Header } from '../../components'
import { Setting } from '../../assets'

export function NotificationScreen() {
    return (
        <View style={style.container}>
            <Header
                centerName={Setting}
                isChoose="text"
                iconName={Setting}
            />
        </View>
    )
}