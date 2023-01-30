import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
interface IFloatingProps {
    iconName?: string
}
export const FloatingButton: FC<IFloatingProps> = ({ iconName }) => {
    return (
        <TouchableOpacity style={style.container}>
            {
                iconName == null ?
                    <Text style={style.text}>
                        +
                    </Text>
                    :
                    <IconM
                        name={iconName}
                        style={style.icon}
                    />
            }
        </TouchableOpacity >
    )
}