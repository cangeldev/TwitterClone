import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import colors from '../../assets/colors/colors'
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/stackNavigator';

export const NotificationSettingsPages = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("NotificationScreen") }}>
                    <IconA
                        name="arrowleft"
                        size={24}
                        color={colors.black}
                    />
                </TouchableOpacity>
                <View style={style.headerTextView}>
                    <Text style={style.text}>
                        Bildirimler
                    </Text>
                    <Text style={style.name}>
                        @Canqgel
                    </Text>
                </View>
            </View>
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
                    <Text style={style.text2}>
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
                    <Text style={style.text2}>
                        Bildirim türüne göre tercihlerini seç.
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}