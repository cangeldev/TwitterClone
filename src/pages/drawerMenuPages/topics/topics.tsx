import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { DrawerPagesHeader } from '../../../components'

import Swiper from "react-native-screens-swiper"
import { FollowingPages, NotRecommendedPages, RecommendedPages } from '../topicsPages'
const data = [
    {
        tabLabel: 'Takip Edilenler',
        component: FollowingPages,
    },
    {
        tabLabel: 'Önerilenler',
        component: RecommendedPages,
    },
    {
        tabLabel: 'İlgilenmiyorum',
        component: NotRecommendedPages,
    }
];
export const Topics = () => {
    return (
        <Swiper
            data={data}
            style={style}
            isStaticPills={true}
            stickyHeaderEnabled={true}
            scrollableContainer={true}>
            <View style={style.container}>
                <DrawerPagesHeader title='Konular' />
            </View>
        </Swiper>
    )
}