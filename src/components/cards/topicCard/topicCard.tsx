import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/colors/colors';
interface ITopicList {
    text: string
}

export const TopicCard: FC<ITopicList> = ({ text }) => {
    return (
        <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>
                {text}
            </Text>
            <IconA
                name="plus"
                size={17}
                color={colors.twitterLogoColor}
            />
            <Text style={style.divider}>
                |
            </Text>
            <IconA
                name="close"
                size={17}
                color={colors.grey}
            />
        </TouchableOpacity>
    )
}