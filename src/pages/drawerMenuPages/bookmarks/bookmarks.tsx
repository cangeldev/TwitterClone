import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { BookmarksPng } from '../../../assets'
import { DrawerPagesHeader } from '../../../components'

export const Bookmarks = () => {
    return (
        <View style={style.container}>
            <DrawerPagesHeader title='Yer işaretleri' />
            <View style={{ paddingHorizontal: 27, }}>
                <Image
                    style={style.image}
                    source={BookmarksPng}
                />
                <Text style={style.title}>
                    Tweetleri daha sonrası için kaydet
                </Text>
                <View >
                    <Text style={style.text}>
                        İyi tweetlerin kaybolup gitmesine izin verme! Gelecekte kolayca bulabilmek için Tweetlerini yer işaretlerine ekle.
                    </Text>
                    <Text style={style.linkText}>
                        Daha fazla bilgi al
                    </Text>
                </View>
            </View>
        </View>
    )
}