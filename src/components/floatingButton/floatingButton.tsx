import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
interface IFloatingProps {
    isChoose?: string;
}
export const FloatingButton: FC<IFloatingProps> = ({ isChoose }) => {
    return (
        <TouchableOpacity style={style.container}>
            {
                isChoose == "icon" ?
                    <IconM
                        name="email-plus-outline"
                        style={style.icon}
                    />
                    : <Text style={style.text}>
                        +
                    </Text>
            }
        </TouchableOpacity >

    )
}