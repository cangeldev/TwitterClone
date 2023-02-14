import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../assets/colors/colors'
import style from './style'
import IconF from 'react-native-vector-icons/FontAwesome';

export const FollowTopicCard = () => {
    const [handle, setHandle] = useState("Takip ediliyor")
    const handleButton = () => {
        handle == "Takip ediliyor" ? setHandle("Takip et") : setHandle("Takip ediliyor")
    }
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
            <TouchableOpacity onPress={handleButton}>
                <Text style={style.followButton}>
                   {handle}
                </Text>
            </TouchableOpacity>
        </View>
    )
}