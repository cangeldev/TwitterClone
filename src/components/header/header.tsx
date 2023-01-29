import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Profil } from '../../assets'
import colors from '../../assets/colors/colors'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParams } from '../../navigation/stackNavigator'
interface IHeaderProps {
    isChoose: string;
    centerName: Image;
    iconName: string;
    placeHolderText?: string;
    go?: string;
}
export const Header: FC<IHeaderProps> = ({ isChoose, centerName, iconName, placeHolderText, go }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    return (
        <View style={style.container}>
            <Image
                source={Profil}
                style={style.profilImage}
            />
            {
                isChoose == "txtInput" ?
                    <TextInput
                        style={style.txtInput}
                        placeholder={placeHolderText}
                        placeholderTextColor={colors.textInputPlaceHolder}
                    />
                    : isChoose == "icon" ?
                        <Image
                            source={centerName as any}
                            style={style.icon}
                        />
                        : <Text style={style.text}>
                            Bildirimler
                        </Text>
            }
            <TouchableOpacity onPress={() => { navigation.navigate(go) }}>
                <Image
                    source={iconName as any}
                    style={style.profilImage}
                />
            </TouchableOpacity>
        </View>
    )
}