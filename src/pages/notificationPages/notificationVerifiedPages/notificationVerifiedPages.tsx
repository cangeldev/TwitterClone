import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { FloatingButton } from '../../../components'
import { VerifiedPagesImage } from '../../../assets'

export const NotificationVerifiedPages = () => {
    return (
        <View style={style.container}>
            <Image style={style.image} source={VerifiedPagesImage} />
            <Text style={style.title}>Henüz Burada görecek bir şey yok </Text>
            <View >
                <Text style={style.text}>Onaylanmış bir hesaptan beğeniler, bahsetmeler, Retweetler ve daha birçok şeyi burada bulabilirsin.</Text>
                <Text style={style.linkText}>Daha fazla bilgi al</Text>
            </View>
            <FloatingButton />

        </View>
    )
}