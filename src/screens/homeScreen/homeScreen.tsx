import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { Header, PostCard } from '../../components'
import { Shine, Twitter } from '../../assets'

export function HomeScreen() {
    return (
        <ScrollView style={style.container} showsVerticalScrollIndicator={false} >
            <Header
                isChoose='icon'
                centerName={Twitter}
                iconName={Shine}
            />
            <PostCard />
        </ScrollView>
    )
}