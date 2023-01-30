import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { DrawerPagesHeader, FloatingButton } from '../../../components'
export const Lists = () => {
    return (
        <View style={style.container}>
            <DrawerPagesHeader title={"Listeler"} />
            <View style={style.contentView}>
                <Text style={style.title}>
                    Sabitlenen Listeler
                </Text>
                <Text style={style.text}>
                    Burada henüz hiçbir şey görünmüyor. Hızlıca erişmek istediğin favori Listelerini üste sabitleyebilirsin.
                </Text>
            </View>
            <View style={style.contentView}>
                <Text style={style.title}>
                    Listelerin
                </Text>
                <Text style={style.text}>
                    Hiç Liste oluşturmadın veya takip etmedin. Oluşturduğun veya takip ettiğin Listeler burada görünür.
                </Text>
            </View>
            <Text style={style.dotStyle}>
                .
            </Text>
            <FloatingButton
                iconName='file-document-edit-outline'
            />
        </View>
    )
}