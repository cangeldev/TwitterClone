import { Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IButton {
    iconName: Image;
}

export const IconButton: FC<IButton> = ({ iconName }) => {
    return (
        <TouchableOpacity style={style.container}>
            <Image
                source={iconName as any}
                style={style.image}
            />
        </TouchableOpacity>
    )
}