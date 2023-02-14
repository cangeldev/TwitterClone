import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../assets/colors/colors'
import style from './style'
import IconF from 'react-native-vector-icons/FontAwesome';

export const FollowTopicCard = () => {
    return (
        <View style={style.container}>
            <View style={style.innerContainer}>
                <IconF
                    name="commenting"
                    size={20}
                    color={colors.black}
                    style={style.icon}
                />
                <View>
                    <Text style={style.title}>
                        Beğenebileceklerin
                    </Text>
                    <Text style={style.text}>
                        Sadece Twitter'da
                    </Text>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={style.followButton}>
                    Takip ediliyor
                </Text>
            </TouchableOpacity>
        </View>
    )
}