import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { FollowTopicCard, TopicCard } from '../../../../components/cards';
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
                <FollowTopicCard />
            </View>
            <View style={style.recommendedTopicView}>
                <Text style={style.recommendedTopicTitle}>
                    Tavsiye Edilen Konular
                </Text>
                <Text style={style.recommendedTopicText}>
                    Bunlar hakkındaki popüler Tweetleri Ana Sayfa zaman akışında görürsün
                </Text>
                <View style={style.topicView}>
                    <TopicCard />
                </View>
            </View>
        </View>
    )
}