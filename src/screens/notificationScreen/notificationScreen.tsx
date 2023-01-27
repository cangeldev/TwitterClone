import { View } from 'react-native'
import React from 'react'
import style from './style'
import { Header } from '../../components'
import { Setting } from '../../assets'
import Swiper from "react-native-screens-swiper"
import { NotificationAllPages, NotificationMentionsPages, NotificationVerifiedPages } from '../../pages'
const data = [
    {
        tabLabel: 'Tümü',
        component: NotificationAllPages,
    },
    {
        tabLabel: 'Onaylanmış',
        component: NotificationVerifiedPages,
    },
    {
        tabLabel: 'Bahsedilenler',
        component: NotificationMentionsPages,
    }
];
export const NotificationScreen = () => {
    return (
        <Swiper
            data={data}
            style={style}
            isStaticPills={true}
            stickyHeaderEnabled={true}
            scrollableContainer={true}>
            <View style={style.container}>
                <Header
                    centerName={Setting}
                    isChoose="text"
                    iconName={Setting}
                />
            </View>
        </Swiper>
    )
}