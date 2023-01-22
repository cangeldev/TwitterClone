import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFE from 'react-native-vector-icons/Feather';
import { Profil } from '../../../assets';
import colors from '../../../assets/colors/colors';
export function PostCard() {
    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <Image
                    source={Profil}
                    style={style.profileImage}
                />
                <View style={style.userInfoView}>
                    <Text style={style.name}>
                        13. Burç
                    </Text>
                    <Text style={style.username}>
                        @13burctahmin
                    </Text>
                    <Text style={style.dot}>
                        .
                    </Text>
                    <Text style={style.time}>
                        10 sa
                    </Text>
                </View>
                <IconE
                    name="dots-three-vertical"
                    size={14}
                    color={colors.grey}
                />
            </View>
            <Text style={style.post}>
                Vazgeçmek zorunda kalmak diye bir şey varmış; bildiğiniz kalbinizi söküp atıyor, çok acı.
            </Text>
            <View style={style.footer}>
                <IconI
                    name="stats-chart"
                    style={style.icon}
                />
                <Text style={style.info}>
                    157B
                </Text>
                <IconF
                    name="comment-o"
                    style={style.icon}
                />
                <Text style={style.info}>
                    18
                </Text>
                <IconA
                    name="retweet"
                    style={style.icon}
                />
                <Text style={style.info}>
                    7
                </Text>
                <IconFE
                    name="heart"
                    style={style.icon}
                />
                <Text style={style.info}>
                    15
                </Text>
                <IconFE
                    name="share-2"
                    style={style.icon}
                />
            </View>
        </View>
    )
}