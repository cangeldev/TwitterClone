import { View, Text, Image, TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Profil } from '../../assets'
import colors from '../../assets/colors/colors'

interface IHeaderProps {
    isChoose: string;
    centerName: Image;
    iconName: string;
    placeHolderText?: string;
}
export const Header: FC<IHeaderProps> = ({ isChoose, centerName, iconName, placeHolderText }) => {
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
            <Image
                source={iconName as any}
                style={style.profilImage}
            />
        </View>
    )
}