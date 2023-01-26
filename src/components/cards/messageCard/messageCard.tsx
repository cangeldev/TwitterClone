import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { Profil } from '../../../assets'

export const MessageCard = () => {
    return (
        <View style={style.headerView}>
            <Image
                source={Profil}
                style={style.profileImage}
            />
            <View style={style.userView}>
                <View style={style.userInfoView}>
                    <Text style={style.name}>
                        Selim Evliyaoglu
                    </Text>
                    <Text style={style.username}>
                        @SlmEvlyu
                    </Text>
                    <View style={style.timeView}>
                        <Text style={style.dot}>
                            .
                        </Text>
                        <Text style={style.time}>
                            22 Kas 22
                        </Text>
                    </View>
                </View>
                <Text numberOfLines={2} style={style.message}>
                    Olsun olsun izlerim bende bir ara sana geri dönüş yaparım bitince
                </Text>
            </View>
        </View>
    )
}