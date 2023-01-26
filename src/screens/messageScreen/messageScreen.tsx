import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { FloatingButton, Header } from '../../components'
import { Setting } from '../../assets'
import { MessageCard } from '../../components/cards'
import { ScrollView } from 'react-native-gesture-handler'

export function MessageScreen() {
    return (
        <View style={style.container}>
            <Header
                isChoose='txtInput'
                centerName={Setting}
                iconName={Setting}
                placeHolderText="Direkt Mesajlarda Ara"
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <MessageCard />
            </ScrollView>
            <FloatingButton isChoose='icon' />
        </View>
    )
}