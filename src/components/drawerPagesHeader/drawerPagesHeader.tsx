import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/stackNavigator';

interface IDrawerPagesHeader {
    title: string
}
export const DrawerPagesHeader: FC<IDrawerPagesHeader> = ({ title }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return (
        <View style={style.container}>
            <View >
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}>
                    <IconA
                        name="arrowleft"
                        size={24}
                        color={colors.black}
                    />
                </TouchableOpacity>
            </View>
            <Text style={style.title}>
                {title}
            </Text>
            <View style={style.dotIcon}>
                <IconE
                    name="dots-three-vertical"
                    size={18}
                    color={colors.grey}
                />
            </View>
        </View>
    )
}