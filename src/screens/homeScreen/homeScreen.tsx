import { View, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { FloatingButton, Header, PostCard } from '../../components'
import { Shine, Twitter } from '../../assets'

export function HomeScreen() {
    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Header
                    isChoose='icon'
                    centerName={Twitter}
                    iconName={Shine}
                />
                <PostCard />
            </ScrollView>
            <FloatingButton />
        </View>
    )
}