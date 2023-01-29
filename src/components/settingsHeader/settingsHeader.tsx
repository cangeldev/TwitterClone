import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconA from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/colors/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from "../../navigation/stackNavigator"
interface ISettingsHeader {
    title: string,
    go: string
}
export const SettingsHeader: FC<ISettingsHeader> = ({ title, go }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return (
        <View style={style.headerView}>
            <TouchableOpacity
                onPress={() => { navigation.navigate(go) }}>
                <IconA
                    name="arrowleft"
                    size={24}
                    color={colors.black}
                />
            </TouchableOpacity>
            <View style={style.headerTextView}>
                <Text style={style.text}>
                    {title}
                </Text>
                <Text style={style.name}>
                    @Canqgel
                </Text>
            </View>
        </View>
    )
}