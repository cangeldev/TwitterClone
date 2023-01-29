import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import colors from '../../assets/colors/colors'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/stackNavigator';
import { SettingsHeader } from '../../components';

export const NotificationSettingsPages = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return (
        <View style={style.container}>
            <SettingsHeader title='Bildirimler' go='NotificationScreen' />
            <Text style={style.info}>
                Etkinliklerin, ilgi alanların ve önerilerin hakkında aldığın bildirim türlerini seç.
            </Text>
            <TouchableOpacity style={style.button}>
                <IconF
                    name="sliders-h"
                    size={20}
                    color={colors.black}
                />
                <View>
                    <Text style={style.title}>
                        Filtreler
                    </Text>
                    <Text style={style.text}>
                        Görmek istediğin ve istemediğin bildirimleri seç.
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
                <IconM
                    name="cellphone-sound"
                    size={20}
                    color={colors.black}
                />
                <View>
                    <Text style={style.title}>
                        Tercihler
                    </Text>
                    <Text style={style.text}>
                        Bildirim türüne göre tercihlerini seç.
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}