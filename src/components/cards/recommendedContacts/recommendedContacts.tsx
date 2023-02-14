import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { Profil } from '../../../assets'
import IconE from 'react-native-vector-icons/FontAwesome5';
import IconA from 'react-native-vector-icons/AntDesign';

export const RecommendedContacts = () => {
    return (
        <View style={style.container}>
            <Image
                source={Profil}
                style={style.image}
            />
            <Text style={style.name}>
                Kitap Alıntıları
            </Text>
            <Text style={style.username}>
                @binkitapalinti
            </Text>
            <TouchableOpacity>
                <Text style={style.button}>
                    Takip et
                </Text>
            </TouchableOpacity>
            <View >
                <IconE
                    name="user-alt"
                    style={style.icon}
                />
                <Text numberOfLines={2} style={style.mutualFriend}>
                    Mert Yazıcı takip ediyor
                </Text>
            </View>
            <IconA
                name="close"
                style={style.iconClose}
            />
        </View>
    )
}