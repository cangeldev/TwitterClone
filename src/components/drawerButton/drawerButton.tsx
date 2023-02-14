import { Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParams } from '../../navigation/stackNavigator'
interface IDrawerButton {
    text: string
    image: Image
    go: string
}

export const DrawerButton: FC<IDrawerButton> = ({ text, image, go }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return (
        <TouchableOpacity style={style.customButton} onPress={() => navigation.navigate(go)}>
            <Image
                source={image as any}
                style={style.customButtonIcon}
            />
            <Text style={style.customButtonText} >
                {text}
            </Text>
        </TouchableOpacity>
    )
}