import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { FollowTopicCard } from '../../../../components/cards'

export const NotRecommendedPages = () => {
    return (
        <View style={style.container}>
            <FollowTopicCard />
        </View>
    )
}