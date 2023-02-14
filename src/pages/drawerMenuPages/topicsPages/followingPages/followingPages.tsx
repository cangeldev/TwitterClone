import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { FollowTopicCard, TopicCard } from '../../../../components/cards';
import { topicList } from '../../../../utils/helper';
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
                    <FlatList
                        numColumns={2}
                        data={topicList}
                        renderItem={({ item }) => <TopicCard key={item.id} text={item.topic} />}
                    />
                </View>
                <Text style={style.moreTopicText}>Daha Fazla Konu</Text>
            </View>
            <Text style={style.text}>
                Takip ettiğin konulular burada gösterilir. Twitter'ın ilgileneceğini düşündüğü her şeyi görmek için
                <Text> </Text>
                <Text style={style.innerText}>
                    Twitter verilerine
                </Text>
                <Text> </Text>
                göz at. Ayrıca, Konuları takip etme hakkında
                <Text> </Text>
                <Text style={style.innerText}>
                    daha fazla bilgi alabilirsin.
                </Text>
            </Text>




        </View>
    )
}