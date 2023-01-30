import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import style from './style'
import { Back, DotMenu, Profil, Searh } from '../../../assets'
import { IconButton } from '../../../components'
import IconF from 'react-native-vector-icons/Fontisto';
import Swiper from "react-native-screens-swiper"
import { ProfileLikesPages, ProfileMediaPages, ProfileTweetsPages, ProfileTweetsRepliesPages } from '../../profilePages'

const data = [
    {
        tabLabel: 'Tweetler',
        component: ProfileTweetsPages,
    },
    {
        tabLabel: 'Yanıtlar',
        component: ProfileTweetsRepliesPages,
    },
    {
        tabLabel: 'Medya',
        component: ProfileMediaPages,
    },
    {
        tabLabel: 'Beğeniler',
        component: ProfileLikesPages,
    },
];

export const Profile = () => {
    return (
        <Swiper
            data={data}
            style={style}
            isStaticPills={true}
            stickyHeaderEnabled={true}
            scrollableContainer={true}>
            <View style={style.container}>
                <View style={style.backGroundImage}>
                    <View>
                        <IconButton iconName={Back} />
                    </View>
                    <View style={style.iconView}>
                        <IconButton iconName={Searh} />
                        <IconButton iconName={DotMenu} />
                    </View>
                </View>
                <Image source={Profil} style={style.profilImage} />
                <TouchableOpacity style={style.profilEditButton}>
                    <Text style={style.profilEditButtonText}>
                        Profili düzenle
                    </Text>
                </TouchableOpacity>
                <View style={style.userView}>
                    <Text style={style.userViewName}>
                        Can
                    </Text>
                    <Text style={style.userViewUsername}>
                        @Canqgel
                    </Text>
                </View>
                <View style={style.userFollowView}>
                    <IconF
                        name="date"
                        size={14}
                        style={style.date}
                    />
                    <Text style={style.date}>
                        Şubat 2021 tarihinde katıldı
                    </Text>
                </View>
                <View style={style.followView}>
                    <View style={style.followView}>
                        <Text style={style.following}>
                            8
                        </Text>
                        <Text style={style.followers}>
                            Takip edilen
                        </Text>
                    </View>
                    <View style={style.followView}>
                        <Text style={style.following}>
                            8
                        </Text>
                        <Text style={style.followers}>
                            Takipçi
                        </Text>
                    </View>
                </View>
            </View>
        </Swiper>
    )
}

