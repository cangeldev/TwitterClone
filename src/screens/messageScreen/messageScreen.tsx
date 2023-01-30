import { View, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { FloatingButton, Header } from '../../components'
import { Setting } from '../../assets'
import { MessageCard } from '../../components/cards'

export function MessageScreen() {
    return (
        <View style={style.container}>
            <Header
                isChoose='txtInput'
                centerName={Setting}
                iconName={Setting}
                placeHolderText="Direkt Mesajlarda Ara"
                go='MessageSettingsPages'
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <MessageCard />
            </ScrollView>
            <FloatingButton
                iconName='email-plus-outline'
            />
        </View>
    )
}