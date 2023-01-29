import { Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
interface IDrawerButton {
    text: string
    image: Image
}
export const DrawerButton: FC<IDrawerButton> = ({ text, image }) => {
    return (
        <TouchableOpacity style={style.customButton}>
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