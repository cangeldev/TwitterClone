import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import colors from '../../../assets/colors/colors'
import IconE from 'react-native-vector-icons/Entypo';

export const TrendsCard = () => {
    return (
        <View style={style.container}>
            <Text style={style.tag}>
                Türkiye tarihinde gündemde
            </Text>
            <Text style={style.title}>
                #Rabia Türkoğlu
            </Text>
            <Text style={style.tweet}>
                3.337 Tweet
            </Text>
            <IconE
                name="dots-three-vertical"
                size={14}
                color={colors.grey}
                style={style.icon}
            />
        </View>
    )
}