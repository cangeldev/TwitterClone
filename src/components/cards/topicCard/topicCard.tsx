import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/colors/colors';
export const TopicCard = () => {
    return (
        <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Cristiano Ronaldo</Text>
            <IconA
                name="plus"
                size={19}
                color={colors.twitterLogoColor}
            />
            <Text style={style.divider}>|</Text>
            <IconA
                name="close"
                size={19}
                color={colors.grey}

            />
        </TouchableOpacity>
    )
}