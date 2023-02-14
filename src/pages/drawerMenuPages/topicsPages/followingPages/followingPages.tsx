import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { FollowTopicCard } from '../../../../components/cards';
export const FollowingPages = () => {
    return (
        <View style={style.container}>
            <View style={style.followView}>
                <Text style={style.followViewText}>
                    Takip ettiğin Konular; gördüğün Tweet, etkinlik ve reklarmları kişiselleştirmek için kullanılır ve profilinde herkese açık şekilde görünür
                </Text>
            </View>
            <View style={style.followTopics}>
                <FollowTopicCard />
            </View>
            <View>
                <Text style={style.deneme1}>
                    Tavsiye Edilen Konular
                </Text>
                <Text>
                    Bunlar hakkındaki popüler
                </Text>
            </View>
        </View>
    )
}